package com.meustreinos.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "ficha_treino")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FichaTreino {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @OneToMany
    private List<Treino> treinos;
}
