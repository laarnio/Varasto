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

    @RequestMapping("/categories")
    public List<Category> getAllCategorys(){
        return categoryService.getAllCategories();
    }

    @RequestMapping("/categories/{id}")
    public Category getCategory(@PathVariable String id) {
        return categoryService.getCategory(id);
    }

    @RequestMapping(method=RequestMethod.POST, value="/categories")
    public Category addCategory(@RequestBody Category category){
        return categoryService.addCategory(category);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/categories/{id}")
    public Category updateCategory(@RequestBody Category category, @PathVariable String id){
        return categoryService.updateCategory(id, category);
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/categories/{id}")
    public void deleteCategory(@PathVariable String id){
        categoryService.deleteCategory(id);
    }
}
