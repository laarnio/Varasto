package net.pirkat.varastoapi.controller;

import net.pirkat.varastoapi.domain.Reservation;
import net.pirkat.varastoapi.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    //Get all reservations
    @RequestMapping("/reservations")
    public List<Reservation> getAllReservations(){
        return reservationService.getAllReservations();
    }

    //Get one reservation
    @RequestMapping("/reservations/{id}")
    public Reservation getReservation(@PathVariable Long id){
        return reservationService.getReservation(id);
    }

    //Post new reservation
    @RequestMapping(method= RequestMethod.POST, value="/reservations")
    public Reservation addReservation(@RequestBody Reservation reservation){

        return reservationService.addReservation(reservation);
    }

}
