package com.example.plantfinder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PlantFinderController {
    @Autowired
    private PlantFinderService plantFinderService;

    //CRUD
    //CREATE/POST
    @PostMapping("/plant")
    public ResponseEntity<Plant> createPlant(@RequestBody Plant plant){
        plantFinderService.addPlant(plant);
        return ResponseEntity.status(HttpStatus.CREATED).body(plant);
    }

    //READ/GET
    @GetMapping("/plant")
    public ResponseEntity<List<Plant>> getAllPlants(){
        return ResponseEntity.status(HttpStatus.OK).body(plantFinderService.getAllPlants());
    }

    @GetMapping("plant/{id}")
    public ResponseEntity<Plant> getPlantById(@PathVariable long id){
        return ResponseEntity.status(HttpStatus.OK).body(plantFinderService.getPlantById(id));
    }

    //UPDATE/PUT
    @PutMapping("/plant/{id}")
    public ResponseEntity<Plant> updatePlant(@RequestBody Plant newPlant, @PathVariable long id){
        newPlant.setId(id);
        plantFinderService.updatePlant(newPlant,id);
        return ResponseEntity.status(HttpStatus.OK).body(newPlant);
    }

    //DELETE

    @DeleteMapping("plant/{id}")
    public ResponseEntity<Void> deletePlantById(@PathVariable long id){
        plantFinderService.deletePlantById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
