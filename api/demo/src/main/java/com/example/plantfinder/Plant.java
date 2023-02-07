package com.example.plantfinder;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String createdBy;
    private LocalDate dateCreated = LocalDate.now();
    private String commonName;
    private String genus;
    private String species;
    private String leafColour;
    private String flowerColour;
    private String height;
    private String description;

    public Plant(){

    }

    public Plant(long id, String createdBy, LocalDate dateCreated, String commonName, String genus, String species, String leafColour, String flowerColour, String height, String description) {
        this.id = id;
        this.createdBy = createdBy;
        this.dateCreated = dateCreated;
        this.commonName = commonName;
        this.genus = genus;
        this.species = species;
        this.leafColour = leafColour;
        this.flowerColour = flowerColour;
        this.height = height;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public String getGenus() {
        return genus;
    }

    public void setGenus(String genus) {
        this.genus = genus;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public String getLeafColour() {
        return leafColour;
    }

    public void setLeafColour(String leafColour) {
        this.leafColour = leafColour;
    }

    public String getFlowerColour() {
        return flowerColour;
    }

    public void setFlowerColour(String flowerColour) {
        this.flowerColour = flowerColour;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
