package net.pirkat.varastoapi.controller;

import net.pirkat.varastoapi.domain.Category;
import net.pirkat.varastoapi.domain.Item;
import net.pirkat.varastoapi.service.ItemService;
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
    public Item addItem(@RequestBody Item item, @PathVariable String categoryId){
        item.setCategory(new Category(categoryId, ""));
        return itemService.addItem(item);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/categories/{categoryId}/items/{id}")
    public Item updateItem(@RequestBody Item item, @PathVariable Long id, @PathVariable String categoryId){
        item.setId(id);
        item.setCategory(new Category(categoryId, ""));
        return itemService.updateItem(item);
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/categories/{categoryId}/items/{id}")
    public void deleteItem(@PathVariable Long id){
        itemService.deleteItem(id);
    }
}
