package net.pirkat.varastoapi.domain;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SelectBeforeUpdate;

import javax.persistence.*;

@Data
@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name, meta;
    private boolean borrowed;


    //Fetch category only when necessary, we dont want to overwhelm the item queries with duplicate information about
    //categories
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private Category category;


}
