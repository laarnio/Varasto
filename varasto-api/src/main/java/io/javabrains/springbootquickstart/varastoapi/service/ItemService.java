package io.javabrains.springbootquickstart.varastoapi.service;

import io.javabrains.springbootquickstart.varastoapi.domain.Item;
import io.javabrains.springbootquickstart.varastoapi.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getAllItems() {
        List<Item> items = new ArrayList<>();
        itemRepository.findAll()
                .forEach(items::add);
        return items;
    }

    public Item getItem(Long id) {
        return itemRepository.findOne(id);
    }

    public void addItem(Item item) {
        itemRepository.save(item);
    }
//TODO: selvitä tää update
    public void updateItem(Long id, Item item) {
        itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.delete(id);
    }
}
