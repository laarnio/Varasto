package io.javabrains.springbootquickstart.varastoapi.repository;

import io.javabrains.springbootquickstart.varastoapi.domain.Category;
import org.springframework.data.repository.CrudRepository;


public interface CategoryRepository extends CrudRepository<Category, String> {

}
