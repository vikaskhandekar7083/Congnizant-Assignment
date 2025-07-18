package com.cognizant.jwt_demo.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.JwtBuilder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {
    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        LOGGER.info("Authentication start");
        LOGGER.debug("Raw Authorization header: {}", authHeader);

        String user = getUserFromBasicHeader(authHeader);
        LOGGER.debug("Decoded user: {}", user);

        String token = generateJwt(user);
        LOGGER.debug("Generated JWT: {}", token);

        Map<String, String> body = new HashMap<>();
        body.put("token", token);
        LOGGER.info("Authentication end");
        return ResponseEntity.ok(body);
    }

    private String getUserFromBasicHeader(String authHeader) {
        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] credBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credBytes);
        return credentials.split(":", 2)[0];
    }

    private String generateJwt(String user) {
        JwtBuilder builder = Jwts.builder()
            .setSubject(user)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 20 * 60_000)) // 20 minutes
            .signWith(SignatureAlgorithm.HS256, "secretkey");
        return builder.compact();
    }
}
