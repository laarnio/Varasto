package net.pirkat.varastoapi.repository;

import net.pirkat.varastoapi.domain.User;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<User, Long> {

}
