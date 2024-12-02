package com.unifor.cardapio.services;

import com.unifor.cardapio.config.SecurityConfig;
import com.unifor.cardapio.models.requests.RegisterRequest;
import com.unifor.cardapio.models.store.Store;
import com.unifor.cardapio.models.user.User;
import com.unifor.cardapio.repositories.StoreRepository;
import com.unifor.cardapio.repositories.UserRepository;
import com.unifor.cardapio.services.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService, IUserService {

    private final UserRepository userRepository;
    private final SecurityConfig securityConfig;
    private final StoreRepository storeRepository;

    @Autowired
    public UserService(UserRepository userRepository, SecurityConfig securityConfig, StoreRepository storeRepository) {
        this.userRepository = userRepository;
        this.securityConfig = securityConfig;
        this.storeRepository = storeRepository;
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado: " + username));
    }


    public boolean belongsToStore(User user, Integer storeId) {
        return user.getStoreId().equals(storeId);
    }

    public User createUser(RegisterRequest registerRequest) {
        System.out.println("Iniciando criação de usuário: " + registerRequest);

        if (userRepository.findByUsername(registerRequest.getUsername()).isPresent()) {
            System.out.println("Usuário já existe: " + registerRequest.getUsername());
            throw new RuntimeException("Username already exists");
        }

        String encodedPassword = securityConfig.passwordEncoder().encode(registerRequest.getPassword());
        System.out.println("Senha codificada com sucesso");

        User user = new User(
                registerRequest.getUsername(),
                encodedPassword,
                registerRequest.getEmail(),
                registerRequest.getName(),
                registerRequest.getRole()
        );

        if (registerRequest.getStoreId() != null) {
            System.out.println("Store ID fornecido: " + registerRequest.getStoreId());
            Store store = storeRepository.findById(registerRequest.getStoreId())
                    .orElseThrow(() -> {
                        System.out.println("Loja não encontrada com ID: " + registerRequest.getStoreId());
                        return new RuntimeException("Store not found");
                    });
            System.out.println("Loja encontrada: " + store);
            user.setStore(store);
        }

        User savedUser = userRepository.save(user);
        System.out.println("Usuário salvo com sucesso: " + savedUser);

        return savedUser;
    }



}
