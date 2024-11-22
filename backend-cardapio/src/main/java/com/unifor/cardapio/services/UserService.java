package com.unifor.cardapio.services;

import com.unifor.cardapio.config.SecurityConfig;
import com.unifor.cardapio.models.requests.RegisterRequest;
import com.unifor.cardapio.models.user.User;
import com.unifor.cardapio.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final SecurityConfig securityConfig;

    @Autowired
    public UserService(UserRepository userRepository, SecurityConfig securityConfig) {
        this.userRepository = userRepository;
        this.securityConfig = securityConfig;
    }

    public boolean belongsToStore(User user, Integer storeId) {
        return user.getStoreId().equals(storeId);
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return org.springframework.security.core.userdetails.User
                .builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .roles(user.getRole().toString()) // Adaptar caso tenha um tipo de role mais complexo
                .build();
    }

    public User createUser(RegisterRequest registerRequest) {
        if (userRepository.findByUsername(registerRequest.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        String encodedPassword = securityConfig.passwordEncoder().encode(registerRequest.getPassword());

        User user = new User(
                registerRequest.getUsername(),
                encodedPassword,
                registerRequest.getEmail(),
                registerRequest.getName(),
                registerRequest.getRole()
        );

        return userRepository.save(user);
    }
}
