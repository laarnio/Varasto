package io.javabrains.springbootquickstart.varastoapi.repository;

import io.javabrains.springbootquickstart.varastoapi.domain.Item;
import org.springframework.data.repository.CrudRepository;


public interface ItemRepository extends CrudRepository<Item, Long> {

}
