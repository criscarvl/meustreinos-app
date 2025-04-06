package com.meustreinos.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "treino_execucao")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TreinoExecucao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Execucao> execucoes;
}