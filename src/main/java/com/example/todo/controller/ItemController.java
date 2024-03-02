package com.example.todo.controller;

import com.example.todo.entity.Item;
import com.example.todo.entity.User;
import com.example.todo.service.ItemService;
import com.example.todo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// TodoItemController.java
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ItemController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private ItemService TodoItemService;

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add-item")
    public ResponseEntity<?> addTodoItems(@RequestBody Item TodoItem) {

        try {
            logger.info("Received signup request for username: {}", TodoItem.getUser().getUsername());


            String username = TodoItem.getUser().getUsername();
            User user = userService.findByUsername(username);

            // Set the user in the TodoItem
            TodoItem.setUser(user);

            // Save the TodoItem
            TodoItemService.saveTodoItem(TodoItem);
            TodoItemService.saveTodoItem(TodoItem);
            Map<String, String> response = new HashMap<>();
            response.put("data", "item  registered successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Handle other exceptions if needed
            Map<String, String> response = new HashMap<>();
            response.put("error", "Error during addddddd iteeeemem");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/items")
    public ResponseEntity<?> getTodoItems() {

        try {
            List<Item> TodoItems = TodoItemService.findAllItems();


            Map<String, Object> response = new HashMap<>();
            response.put("data", TodoItems);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Handle other exceptions if needed
            Map<String, String> response = new HashMap<>();
            response.put("error", "Error during add item");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/my-items")
    public ResponseEntity<?> getMyTodoItems(@RequestParam String username) {
        logger.info("Received myitem request for username: {}",username);



        try {
            User user=userService.findByUsername(username);
            long id=user.getId();


            List<Item> TodoItems = TodoItemService.findByUserId(id);

            Map<String, Object> response = new HashMap<>();
            response.put("data", TodoItems);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Handle other exceptions if needed
            Map<String, String> response = new HashMap<>();
            response.put("error", "Error during add item");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
