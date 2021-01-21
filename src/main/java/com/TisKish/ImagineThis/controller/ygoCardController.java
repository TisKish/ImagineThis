package com.TisKish.ImagineThis.controller;

import com.TisKish.ImagineThis.model.ygoCard;
import com.TisKish.ImagineThis.repository.ygoCardRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ygoCardController {

    @Autowired
    ygoCardRepository YgoCardRepository;

    // public ygoCardController(ygoCardRepository YgoCardRepository) {
    // this.YgoCardRepository = YgoCardRepository;
    // }

    @GetMapping("/ygocards")
    public ResponseEntity<List<ygoCard>> getYgoCards(@RequestParam(required = false) String name) {
        try {
            List<ygoCard> YgoCard = new ArrayList<ygoCard>();

            if (name == null)
                YgoCardRepository.findAll().forEach(YgoCard::add);
            else
                YgoCardRepository.findByNameContaining(name).forEach(YgoCard::add);

            if (YgoCard.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(YgoCard, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/ygocards/{id}")
    public ResponseEntity<ygoCard> getCardById(@PathVariable("id") String id) {
        Optional<ygoCard> ygoCardData = YgoCardRepository.findById(id);

        if (ygoCardData.isPresent()) {
            return new ResponseEntity<>(ygoCardData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/ygocards")
    public ResponseEntity<ygoCard> createYgoCard(@RequestBody ygoCard YgoCard) {
        try {
            ygoCard _ygoCard = YgoCardRepository.save(new ygoCard(YgoCard.getName(), YgoCard.getIcon(),
                    YgoCard.getDetail(), YgoCard.getRarity(), YgoCard.getEdition(), YgoCard.getPack(),
                    YgoCard.getOwned(), YgoCard.getOPrice(), YgoCard.getPPrice(), YgoCard.getCPrice(),
                    YgoCard.getProjection(), YgoCard.getUrl(), YgoCard.getChange(), YgoCard.getLocation()));
            return new ResponseEntity<>(_ygoCard, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/ygocards/{id}")
    public ResponseEntity<ygoCard> updateYgoCard(@PathVariable("id") String id, @RequestBody ygoCard YgoCard) {
        Optional<ygoCard> ygoCardData = YgoCardRepository.findById(id);

        if (ygoCardData.isPresent()) {
            ygoCard _ygoCard = ygoCardData.get();
            _ygoCard.setName(YgoCard.getName());
            _ygoCard.setIcon(YgoCard.getIcon());
            _ygoCard.setDetail(YgoCard.getDetail());
            _ygoCard.setRarity(YgoCard.getRarity());
            _ygoCard.setEdition(YgoCard.getEdition());
            _ygoCard.setPack(YgoCard.getPack());
            _ygoCard.setOwned(YgoCard.getOwned());
            _ygoCard.setOPrice(YgoCard.getOPrice());
            _ygoCard.setPPrice(YgoCard.getPPrice());
            _ygoCard.setCPrice(YgoCard.getCPrice());
            _ygoCard.setProjection(YgoCard.getProjection());
            _ygoCard.setUrl(YgoCard.getUrl());
            _ygoCard.setChange(YgoCard.getChange());
            _ygoCard.setLocation(YgoCard.getLocation());

            return new ResponseEntity<>(YgoCardRepository.save(_ygoCard), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/ygocards/{id}")
    public ResponseEntity<HttpStatus> deleteYgoCard(@PathVariable("id") String id) {
        try {
            YgoCardRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}