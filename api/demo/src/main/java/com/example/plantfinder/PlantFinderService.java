package com.example.plantfinder;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlantFinderService {
    @Autowired
    PlantFinderRepository plantFinderRepository;

    //CRUD
    //CREATE/POST
    public void addPlant(Plant plant){
        plantFinderRepository.save(plant);
    }

    //READ/GET
    public List<Plant> getAllPlants(){
        return plantFinderRepository.findAll();
    }
    public Plant getPlantById(long id){
        Optional<Plant> plant = plantFinderRepository.findById(id);
        return plant.get();

    }
    //UPDATE/PUT
    public void updatePlant(Plant newPlant,long id){
        newPlant.setId(id);
        plantFinderRepository.save(newPlant);
    }

    //DELETE
    @Transactional
    public void deletePlantById(long id){
        plantFinderRepository.deletePlantById(id);
    }


}
