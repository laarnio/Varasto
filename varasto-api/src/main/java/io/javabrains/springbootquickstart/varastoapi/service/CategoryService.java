package io.javabrains.springbootquickstart.varastoapi.service;

import io.javabrains.springbootquickstart.varastoapi.domain.Category;
import io.javabrains.springbootquickstart.varastoapi.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        List<Category> categories = new ArrayList<>();
        categoryRepository.findAll()
                .forEach(categories::add);
        return categories;
    }

    public Category getCategory(String id) {
        return categoryRepository.findOne(id);
    }

    public void addCategory(Category category) {
        categoryRepository.save(category);
    }
//TODO: selvitä tää update
    public void updateCategory(String id, Category category) {
        categoryRepository.save(category);
    }

    public void deleteCategory(String id) {
        categoryRepository.delete(id);
    }
}
