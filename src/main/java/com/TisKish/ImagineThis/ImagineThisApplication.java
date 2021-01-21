package com.TisKish.ImagineThis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan(basePackages={"com.TisKish.ImagineThis"})
@EnableMongoRepositories
public class ImagineThisApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImagineThisApplication.class, args);
	}

}
