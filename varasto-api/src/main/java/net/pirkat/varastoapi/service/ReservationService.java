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

    public List<Reservation> getAllReservations() {
        List<Reservation> reservations = new ArrayList<>();
        reservationRepository.findAll()
                .forEach(reservations::add);
        return reservations;
    }

    public Reservation getReservation(Long id) {
        return reservationRepository.findOne(id);
    }

    public Reservation addReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
}
