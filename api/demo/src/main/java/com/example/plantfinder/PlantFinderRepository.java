package com.example.plantfinder;

import org.springframework.data.jpa.repository.JpaRepository;



public interface PlantFinderRepository extends JpaRepository<Plant, Long> {
    void deletePlantById(long id);

}
