package io.javabrains.springbootquickstart.varastoapi.controller;

import io.javabrains.springbootquickstart.varastoapi.domain.Category;
import io.javabrains.springbootquickstart.varastoapi.domain.Item;
import io.javabrains.springbootquickstart.varastoapi.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    private ItemService itemService;

    @RequestMapping("/categories/{id}/items")
    public List<Item> getAllItems(@PathVariable String id){
        return itemService.getAllItems(id);
    }

    @RequestMapping("/categories/{categoryId}/items/{id}")
    public Item getItem(@PathVariable Long id) {
        return itemService.getItem(id);
    }

    @RequestMapping(method=RequestMethod.POST, value="/categories/{categoryId}/items")
    public void addItem(@RequestBody Item item, @PathVariable String categoryId){
        item.setCategory(new Category(categoryId, ""));
        itemService.addItem(item);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/categories/{categoryId}/items/{id}")
    public void updateItem(@RequestBody Item item, @PathVariable Long id, @PathVariable String categoryId){
        item.setCategory(new Category(categoryId, ""));
        itemService.updateItem(item);
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/categories/{categoryId}/items/{id}")
    public void deleteItem(@PathVariable Long id){
        itemService.deleteItem(id);
    }
}
