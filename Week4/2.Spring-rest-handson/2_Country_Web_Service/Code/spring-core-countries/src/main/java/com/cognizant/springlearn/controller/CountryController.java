package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController      
public class CountryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @GetMapping("/country")
    public Country getCountryIndia() {
        LOGGER.debug(">>> getCountryIndia() start");

        try (var ctx = new ClassPathXmlApplicationContext("country.xml")) {
            Country india = ctx.getBean("country", Country.class);
            LOGGER.debug("<<< getCountryIndia() end");
            return india;
        }
    }
}
