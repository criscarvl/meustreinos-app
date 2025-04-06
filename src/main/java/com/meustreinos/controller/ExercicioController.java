package com.meustreinos.controller;

import com.meustreinos.dto.ExercicioRequestDTO;
import com.meustreinos.model.Exercicio;
import com.meustreinos.repository.ExercicioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/exercicios")
public class ExercicioController {

    @Autowired
    private ExercicioRepository exercicioRepository;

    @GetMapping
    public List<Exercicio> listarExercicios() {
        return exercicioRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Exercicio> buscarPorId(@PathVariable Long id) {
        return exercicioRepository.findById(id);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> criarExercicio(
            @ModelAttribute ExercicioRequestDTO exercicioDTO,
            @RequestParam(value = "video", required = false) MultipartFile videoFile
    ) {
        Exercicio exercicio = new Exercicio();
        exercicio.setNome(exercicioDTO.getNome());
        exercicio.setSeries(exercicioDTO.getSeries());
        exercicio.setRepeticoes(exercicioDTO.getRepeticoes());
        exercicio.setDescricao(exercicioDTO.getDescricao());

        if (videoFile != null && !videoFile.isEmpty()) {
            String fileName = videoFile.getOriginalFilename();
            exercicio.setVideoFileName(fileName);

            // Exemplo de salvar localmente:
            try {
                Path videoPath = Paths.get("videos/" + fileName);
                Files.createDirectories(videoPath.getParent());
                Files.write(videoPath, videoFile.getBytes());
            } catch (IOException e) {
                return ResponseEntity.status(500).body("Erro ao salvar vídeo: " + e.getMessage());
            }
        }

        return ResponseEntity.ok(exercicioRepository.save(exercicio));
    }

    @DeleteMapping("/{id}")
    public void deletarExercicio(@PathVariable Long id) {
        exercicioRepository.deleteById(id);
    }
}
