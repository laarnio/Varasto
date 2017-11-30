package net.pirkat.varastoapi.service;

import net.pirkat.varastoapi.domain.Reservation;
import net.pirkat.varastoapi.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    //Get all
    public List<Reservation> getAllReservations() {
        List<Reservation> reservations = new ArrayList<>();
        reservationRepository.findAll()
                .forEach(reservations::add);
        return reservations;
    }
    //Get one
    public Reservation getReservation(Long id) {
        return reservationRepository.findOne(id);
    }

    //Post new
    public Reservation addReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
}
