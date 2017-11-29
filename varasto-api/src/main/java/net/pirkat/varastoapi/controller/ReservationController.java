package net.pirkat.varastoapi.controller;

import net.pirkat.varastoapi.domain.Reservation;
import net.pirkat.varastoapi.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @RequestMapping("/reservations")
    public List<Reservation> getAllReservations(){
        return reservationService.getAllReservations();
    }

    @RequestMapping("/reservations/{id}")
    public Reservation getReservation(@PathVariable Long id){
        return reservationService.getReservation(id);
    }
    @RequestMapping(method= RequestMethod.POST, value="/reservations")
    public Reservation addReservation(@RequestBody Reservation reservation){

        return reservationService.addReservation(reservation);
    }

}
