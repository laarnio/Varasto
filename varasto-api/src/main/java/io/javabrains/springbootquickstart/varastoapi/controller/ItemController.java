package io.javabrains.springbootquickstart.varastoapi.controller;

import io.javabrains.springbootquickstart.varastoapi.domain.Item;
import io.javabrains.springbootquickstart.varastoapi.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    private ItemService itemService;

    @RequestMapping("/items")
    public List<Item> getAllItems(){
        return itemService.getAllItems();
    }

    @RequestMapping("/items/{id}")
    public Item getItem(@PathVariable Long id) {
        return itemService.getItem(id);
    }

    @RequestMapping(method=RequestMethod.POST, value="/items")
    public void addItem(@RequestBody Item item){
        itemService.addItem(item);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/items/{id}")
    public void updateItem(@RequestBody Item item, @PathVariable Long id){
        itemService.updateItem(id, item);
    }
}
