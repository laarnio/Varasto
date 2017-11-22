package io.javabrains.springbootquickstart.varastoapi.service;

import io.javabrains.springbootquickstart.varastoapi.domain.Item;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ItemService {

    private List<Item> items = new ArrayList<>(Arrays.asList(
            new Item(0L, "Carcassonne", "pala puuttuu", true)
            ));

    public List<Item> getAllItems() {
        return items;
    }
    public Item getItem(Long id) {
        return items.stream().filter(t -> t.getId().equals(id)).findFirst().get();
    }

    public void addItem(Item item) {
        items.add(item);
    }
    public void updateItem(Long id, Item item) {
        for(int i = 0 ; i < items.size() ; ++i){
            Item t = items.get(i);
            if(t.getId().equals(id)) {
                items.set(i, item);
                return;
            }
        }
    }

}
