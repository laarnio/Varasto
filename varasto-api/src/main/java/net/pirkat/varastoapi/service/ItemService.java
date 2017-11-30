package net.pirkat.varastoapi.service;

import net.pirkat.varastoapi.domain.Item;
import net.pirkat.varastoapi.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    //Get all
    public List<Item> getAllItems(Long categoryId) {
        List<Item> items = new ArrayList<>();
        itemRepository.findByCategoryId(categoryId)
                .forEach(items::add);
        return items;
    }

    //Get one
    public Item getItem(Long id) {
        return itemRepository.findOne(id);
    }

    //Post new
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }
    //TODO: selvitä tää update
    //Update
    public Item updateItem(Item item) {
        return itemRepository.save(item);
    }
    //Delete
    public void deleteItem(Long id) {
        itemRepository.delete(id);
    }
}
