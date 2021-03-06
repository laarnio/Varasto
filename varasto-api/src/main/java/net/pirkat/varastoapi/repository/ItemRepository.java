package net.pirkat.varastoapi.repository;

import net.pirkat.varastoapi.domain.Item;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface ItemRepository extends CrudRepository<Item, Long> {

    List<Item> findByCategoryId(Long categoryId);
}
