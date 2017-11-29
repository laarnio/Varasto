package net.pirkat.varastoapi.repository;

import net.pirkat.varastoapi.domain.Reservation;
import org.springframework.data.repository.CrudRepository;

public interface ReservationRepository extends CrudRepository<Reservation, Long> {


}

