package net.pirkat.varastoapi.controller;

import net.pirkat.varastoapi.domain.Category;
import net.pirkat.varastoapi.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    //Get all Categories
    @RequestMapping("/categories")
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }

    //Get one category
    @RequestMapping("/categories/{id}")
    public Category getCategory(@PathVariable Long id) {
        return categoryService.getCategory(id);
    }

    //Post new category
    @RequestMapping(method=RequestMethod.POST, value="/categories")
    public Category addCategory(@RequestBody Category category){
        return categoryService.addCategory(category);
    }

    //Update category
    @RequestMapping(method=RequestMethod.PUT, value="/categories/{id}")
    public Category updateCategory(@RequestBody Category category, @PathVariable Long id){
        category.setId(id);
        return categoryService.updateCategory(id, category);
    }

    //Delete Category
    @RequestMapping(method=RequestMethod.DELETE, value="/categories/{id}")
    public void deleteCategory(@PathVariable Long id){
        categoryService.deleteCategory(id);
    }
}
