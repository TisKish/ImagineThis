package com.TisKish.ImagineThis.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.TisKish.ImagineThis.model.ygoCard;

public interface ygoCardRepository extends MongoRepository<ygoCard, String> {
    List<ygoCard> findByNameContaining(String name);
  }