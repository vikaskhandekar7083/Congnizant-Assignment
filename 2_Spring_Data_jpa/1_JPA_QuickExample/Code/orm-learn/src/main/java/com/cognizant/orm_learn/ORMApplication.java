package com.cognizant.orm_learn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;

@SpringBootApplication
public class ORMApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(ORMApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(ORMApplication.class, args);
        LOGGER.info("Inside main");

        countryService = context.getBean(CountryService.class);
        testGetAllCountries();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start testGetAllCountries");
        List<Country> countries = countryService.getAllCountries();
        countries.forEach(c -> LOGGER.debug("Country: {}", c));
        LOGGER.info("End testGetAllCountries");
    }
}