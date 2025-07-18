package com.cognizant.jwt_demo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.http.HttpMethod;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity   
public class SecurityConfig {

    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        UserDetails user = User.withUsername("user")
        	.password("{noop}pwd")   
            .roles("USER")
            .build();

        UserDetails admin = User.withUsername("admin")
            .password("{noop}pwd")
            .roles("ADMIN")
            .build();

        return new InMemoryUserDetailsManager(user, admin);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
          .csrf(csrf -> csrf.disable())

          .httpBasic(Customizer.withDefaults())

          .authorizeHttpRequests(authorize -> authorize
            .requestMatchers(HttpMethod.GET, "/authenticate")
              .hasAnyRole("USER", "ADMIN")
            .anyRequest()
              .authenticated()
          );

        return http.build();
    }
}
