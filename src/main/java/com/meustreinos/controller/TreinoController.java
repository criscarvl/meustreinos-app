package com.meustreinos.controller;

import com.meustreinos.model.Treino;
import com.meustreinos.repository.TreinoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/treinos")
public class TreinoController {

    @Autowired
    private TreinoRepository treinoRepository;

    @GetMapping
    public List<Treino> listarTreinos() {
        return treinoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Treino> buscarPorId(@PathVariable Long id) {
        return treinoRepository.findById(id);
    }

    @PostMapping
    public Treino criarTreino(@RequestBody Treino treino) {
        return treinoRepository.save(treino);
    }

    @DeleteMapping("/{id}")
    public void deletarTreino(@PathVariable Long id) {
        treinoRepository.deleteById(id);
    }
}
