package io.javabrains.springbootquickstart.varastoapi.repository;

import io.javabrains.springbootquickstart.varastoapi.domain.Item;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface ItemRepository extends CrudRepository<Item, Long> {

    public List<Item> findByCategoryId(String categoryId);
}
