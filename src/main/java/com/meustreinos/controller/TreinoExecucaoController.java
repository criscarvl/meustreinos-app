package com.meustreinos.controller;

import com.meustreinos.dto.TreinoExecucaoDTO;
import com.meustreinos.model.Execucao;
import com.meustreinos.model.Exercicio;
import com.meustreinos.model.TreinoExecucao;
import com.meustreinos.repository.ExercicioRepository;
import com.meustreinos.repository.TreinoExecucaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/treino-execucao")
public class TreinoExecucaoController {

    @Autowired
    private TreinoExecucaoRepository treinoExecucaoRepository;

    @Autowired
    private ExercicioRepository exercicioRepository;

    @PostMapping
    public TreinoExecucao salvarTreino(@RequestBody TreinoExecucaoDTO dto) {
        List<Execucao> execucoes = dto.getExecucoes().stream().map(exec -> {
            Execucao e = new Execucao();
            Exercicio exercicio = exercicioRepository.findById(exec.getExercicioId()).orElseThrow();
            e.setExercicio(exercicio);
            e.setSeries(exec.getSeries());
            e.setPesosPorSerie(exec.getPesosPorSerie());
            return e;
        }).collect(Collectors.toList());

        TreinoExecucao treino = new TreinoExecucao();
        treino.setNome(dto.getNome());
        treino.setExecucoes(execucoes);

        return treinoExecucaoRepository.save(treino);
    }
}
