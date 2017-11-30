package net.pirkat.varastoapi.domain;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.envers.Audited;
import org.hibernate.envers.NotAudited;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Data
@Entity
@Audited
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @CreationTimestamp
    private Date created;
    //List of items the borrower wants to borrow
    @ManyToMany
    private List<Item> items;

    @NotAudited
    @OneToOne
    private User borrower;

    @NotAudited
    @OneToOne
    private User giver;
}
