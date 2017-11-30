package net.pirkat.varastoapi.domain;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Data
@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @CreationTimestamp
    private Date created;
    //List of items the borrower wants to borrow
    @OneToMany
    private List<Item> items;

    @OneToOne
    private User borrower;
    @OneToOne
    private User giver;
}
