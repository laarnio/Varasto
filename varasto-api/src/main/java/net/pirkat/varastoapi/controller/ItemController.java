package net.pirkat.varastoapi.controller;

import net.pirkat.varastoapi.domain.Category;
import net.pirkat.varastoapi.domain.Item;
import net.pirkat.varastoapi.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
public class ItemController {

    @Autowired
    private ItemService itemService;

    //Get-request for all items in a category
    @RequestMapping("/api/categories/{id}/items")
    public List<Item> getAllItems(@PathVariable Long id){
        return itemService.getAllItems(id);
    }

    //Get-request for a particular item in a category
    @RequestMapping("/api/categories/{categoryId}/items/{id}")
    public Item getItem(@PathVariable Long id) {
        return itemService.getItem(id);
    }

    //Post-request for adding new item to a category
    @RequestMapping(method=RequestMethod.POST, value="/api/categories/{categoryId}/items")
    public Item addItem(@RequestBody Item item, @PathVariable Long categoryId){
        item.setCategory(new Category(categoryId, "", ""));
        return itemService.addItem(item);
    }

    //Update item and set a category for it
    @RequestMapping(method=RequestMethod.PUT, value="/api/categories/{categoryId}/items/{id}")
    public Item updateItem(@RequestBody Item item, @PathVariable Long id, @PathVariable Long categoryId){
        item.setId(id);
        item.setCategory(new Category(categoryId,"", ""));
        return itemService.updateItem(item);
    }

    //Update multiple items (set borrowed-flag to true)
    @RequestMapping(method=RequestMethod.PUT, value="/api/items")
    public List<Item> updateItems(@RequestBody List<Item> items) {
        return itemService.updateItems(items);
    }
    
    //Delete item
    @RequestMapping(method=RequestMethod.DELETE, value="/api/categories/{categoryId}/items/{id}")
    public void deleteItem(@PathVariable Long id){
        itemService.deleteItem(id);
    }
}
