package net.pirkat.varastoapi.service;

import net.pirkat.varastoapi.domain.User;
import net.pirkat.varastoapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    //Get all
    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll()
                .forEach(users::add);
        return users;
    }
    //Get one
    public User getUser(Long id) {
        return userRepository.findOne(id);
    }

    //Post new
    public User addUser(User user) {
        return userRepository.save(user);
    }

    //TODO: selvitä tää update
    //Update
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    //Delete
    public void deleteUser(Long id) {
        userRepository.delete(id);
    }
}
