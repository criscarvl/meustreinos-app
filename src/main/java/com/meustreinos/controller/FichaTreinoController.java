package com.meustreinos.controller;

import com.meustreinos.model.FichaTreino;
import com.meustreinos.repository.FichaTreinoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/fichas")
public class FichaTreinoController {

    @Autowired
    private FichaTreinoRepository fichaTreinoRepository;

    @GetMapping
    public List<FichaTreino> listarFichas() {
        return fichaTreinoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<FichaTreino> buscarPorId(@PathVariable Long id) {
        return fichaTreinoRepository.findById(id);
    }

    @PostMapping
    public FichaTreino criarFicha(@RequestBody FichaTreino fichaTreino) {
        return fichaTreinoRepository.save(fichaTreino);
    }

    @DeleteMapping("/{id}")
    public void deletarFicha(@PathVariable Long id) {
        fichaTreinoRepository.deleteById(id);
    }
}
