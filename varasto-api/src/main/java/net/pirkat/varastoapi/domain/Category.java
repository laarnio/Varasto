package net.pirkat.varastoapi.domain;


import lombok.*;

import javax.persistence.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Category {
    @Id
    private String id;

    private String description;
}
