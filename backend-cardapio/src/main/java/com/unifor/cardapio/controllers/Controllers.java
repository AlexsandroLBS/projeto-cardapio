package com.unifor.cardapio.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controllers {

	@GetMapping("/")
	public String sayHello() {
		return "La carte no ar!";
	}
}
