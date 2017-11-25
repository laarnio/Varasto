package net.pirkat.varastoapi.controller;

import net.pirkat.varastoapi.domain.User;
import net.pirkat.varastoapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/users")
    public List<User> getAllItems(){
        return userService.getAllUsers();
    }
    @RequestMapping("/users/{id}")
    public User getUser(@PathVariable Long id){
        return userService.getUser(id);
    }
    @RequestMapping(method= RequestMethod.POST, value="/users")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/users/{id}")
    public User updateUser(@RequestBody User user, @PathVariable Long id){
        user.setId(id);
        return userService.updateUser(user);
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/users/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
}
