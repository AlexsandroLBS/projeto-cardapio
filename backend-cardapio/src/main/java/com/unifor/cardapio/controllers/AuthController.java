package com.unifor.cardapio.controllers;

import com.unifor.cardapio.controllers.interfaces.IAuthController;
import com.unifor.cardapio.models.requests.LoginRequest;
import com.unifor.cardapio.models.requests.RegisterRequest;
import com.unifor.cardapio.models.user.User;
import com.unifor.cardapio.services.interfaces.IUserService;
import com.unifor.cardapio.util.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController implements IAuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtTokenProvider;
    private final IUserService userService;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtTokenProvider, IUserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = (User) userService.loadUserByUsername(loginRequest.getUsername());

        Map<String, Object> userInfo = new HashMap<>();
        userInfo.put("id", user.getId());
        userInfo.put("username", user.getUsername());
        userInfo.put("email", user.getEmail());
        userInfo.put("name", user.getName());
        userInfo.put("role", user.getRole().name());
        userInfo.put("phoneNumber", user.getPhoneNumber());
        userInfo.put("address", user.getAddress());
        userInfo.put("storeId", user.getStoreId());

        return jwtTokenProvider.generateToken(authentication, userInfo);
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@Valid @RequestBody RegisterRequest registerRequest) {
        System.out.println("Payload recebido: " + registerRequest);
        try {
            User user = userService.createUser(registerRequest);
            return ResponseEntity.ok(user);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

}
