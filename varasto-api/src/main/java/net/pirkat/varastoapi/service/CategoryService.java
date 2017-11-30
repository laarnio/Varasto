package net.pirkat.varastoapi.service;

import net.pirkat.varastoapi.domain.Category;
import net.pirkat.varastoapi.repository.CategoryRepository;
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

    public Category getCategory(Long id) {
        return categoryRepository.findOne(id);
    }

    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    }
//TODO: selvitä tää update
    public Category updateCategory(Long id, Category category) {
        return categoryRepository.save(category);
    }

    public void deleteCategory(Long id) {
        categoryRepository.delete(id);
    }
}
