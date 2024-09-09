package com.unifor.cardapio.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/") // Endpoint para o controller
	public String sayHello() {
		return "Hello from my Spring Boot server!";
	}
}
