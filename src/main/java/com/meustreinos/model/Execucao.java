package com.meustreinos.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "execucao")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Execucao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Exercicio exercicio;

    private Integer series;

    @ElementCollection
    private List<Double> pesosPorSerie;
}