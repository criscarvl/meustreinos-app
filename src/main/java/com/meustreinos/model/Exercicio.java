package com.meustreinos.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "exercicio")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Exercicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private Integer series;
    private Integer repeticoes;
    private String descricao;
    private String videoFileName;
}