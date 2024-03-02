package com.example.todo.repository;


import com.example.todo.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// TodoItemRepository.java
public interface ItemRepository extends JpaRepository<Item, Long> {


    List<Item> findAll();

    List<Item> findByUser_Id(long userId);

}


