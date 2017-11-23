package io.javabrains.springbootquickstart.varastoapi.controller;

import io.javabrains.springbootquickstart.varastoapi.domain.Category;
import io.javabrains.springbootquickstart.varastoapi.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping("/categories")
    public List<Category> getAllCategorys(){
        return categoryService.getAllCategories();
    }

    @RequestMapping("/categories/{id}")
    public Category getCategory(@PathVariable String id) {
        return categoryService.getCategory(id);
    }

    @RequestMapping(method=RequestMethod.POST, value="/categories")
    public void addCategory(@RequestBody Category category){
        categoryService.addCategory(category);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/categories/{id}")
    public void updateCategory(@RequestBody Category category, @PathVariable String id){
        categoryService.updateCategory(id, category);
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/categories/{id}")
    public void deleteCategory(@PathVariable String id){
        categoryService.deleteCategory(id);
    }
}
