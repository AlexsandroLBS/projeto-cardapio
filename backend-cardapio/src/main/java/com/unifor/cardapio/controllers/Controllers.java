package com.unifor.cardapio.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class Controllers {

	@GetMapping(value = { "/", "/login", "/s/**" })
	public ModelAndView index() {
		return new ModelAndView("forward:/index.html");
	}
}
