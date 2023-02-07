package com.example.plantfinder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PlantFinderController {
    @Autowired
    private PlantFinderService plantFinderService;

    //CRUD
    //CREATE/POST

    //READ/GET
    @GetMapping("/plants")
    public ResponseEntity<List<Plant>> getAllPlants(){
        return ResponseEntity.status(HttpStatus.OK).body(plantFinderService.getAllPlants());
    }

    //UPDATE/PUT

    //DELETE

}
