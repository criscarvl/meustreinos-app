package com.meustreinos.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "treino_exercicio")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TreinoExercicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer ordem;

    @ManyToOne
    @JoinColumn(name = "treino_id")
    private Treino treino;

    @ManyToOne
    @JoinColumn(name = "exercicio_id")
    private Exercicio exercicio;
}
