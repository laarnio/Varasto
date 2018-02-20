package net.pirkat.varastoapi.domain;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.hibernate.envers.Audited;
import org.hibernate.envers.NotAudited;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Audited
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    @OneToMany
    private List<MetaInfo> metaInfos;
    @NotAudited
    private boolean borrowed;


    //Fetch category only when necessary, we dont want to overwhelm the item queries with duplicate information about
    //categories
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @NotAudited
    private Category category;



}
