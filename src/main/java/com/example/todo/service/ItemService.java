package com.example.todo.service;

import com.example.todo.entity.Item;
import com.example.todo.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ItemService {

    @Autowired
    private ItemRepository TodoItemRepository;

    public List<Item> findAllItems()
    {
        return TodoItemRepository.findAll();
    }

    public Item saveTodoItem(Item TodoItem) {
        return TodoItemRepository.save(TodoItem);
    }

    public List<Item> findByUserId(Long userId) {
        return TodoItemRepository.findByUser_Id(userId);
    }
}
