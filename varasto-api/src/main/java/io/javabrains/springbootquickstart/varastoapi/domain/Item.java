package io.javabrains.springbootquickstart.varastoapi.domain;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name, meta;
    private boolean borrowed;


    //Fetch category only when necessary, we dont want to overwhelm the item queries with multiple information about
    //categories
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private Category category;

    public Item() {

    }

    public Item(Long id, String name, String meta, boolean borrowed, String categoryId) {
        super();
        this.id = id;
        this.name = name;
        this.meta = meta;
        this.borrowed = borrowed;
        this.category = new Category(categoryId, "");
    }

    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public String getName() {

        return name;
    }

    public void setName(String name) {

        this.name = name;
    }

    public boolean isBorrowed() {

        return borrowed;
    }

    public void setBorrowed(boolean borrowed) {

        this.borrowed = borrowed;
    }

    public String getMeta() {

        return meta;
    }

    public void setMeta(String meta) {

        this.meta = meta;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
