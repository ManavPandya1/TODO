package com.example.todo.repository;


import com.example.todo.entity.Item;
import com.example.todo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {


    List<Item> findByUser(User user);

}


