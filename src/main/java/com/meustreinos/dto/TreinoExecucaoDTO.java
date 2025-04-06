package com.meustreinos.dto;

import lombok.Data;

import java.util.List;

@Data
public class TreinoExecucaoDTO {
    private String nome;
    private List<ExecucaoDTO> execucoes;
}
