package com.meustreinos.dto;

import lombok.Data;

import java.util.List;

@Data
public class ExecucaoDTO {
    private Long exercicioId;
    private Integer series;
    private List<Double> pesosPorSerie;
}
