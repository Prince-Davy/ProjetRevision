package com.projet.revision.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/resource")
                .allowedOrigins("http://localhost:4200") // Autorisez uniquement cette origine
                .allowedMethods("POST, PUT, DELETE, GET"); // Autorisez uniquement les requêtes GET
    }
}
