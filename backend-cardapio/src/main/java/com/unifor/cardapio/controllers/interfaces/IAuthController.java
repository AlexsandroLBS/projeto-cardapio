package com.unifor.cardapio.controllers.interfaces;

import com.unifor.cardapio.models.requests.LoginRequest;
import com.unifor.cardapio.models.requests.RegisterRequest;
import com.unifor.cardapio.models.user.User;
import org.springframework.http.ResponseEntity;

public interface IAuthController {
    String login(LoginRequest loginRequest);
    ResponseEntity<User> register(RegisterRequest registerRequest);
}
