package net.pirkat.varastoapi.repository;

import net.pirkat.varastoapi.domain.Category;
import org.springframework.data.repository.CrudRepository;


public interface CategoryRepository extends CrudRepository<Category, Long> {

}
