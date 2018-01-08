package net.pirkat.varastoapi.domain;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.envers.Audited;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Audited
public class MetaInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String meta;
    @CreationTimestamp
    private Date created;

}