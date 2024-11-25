package com.unifor.cardapio.services.interfaces;

import com.unifor.cardapio.models.requests.RegisterRequest;
import com.unifor.cardapio.models.user.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IUserService extends UserDetailsService {
    boolean belongsToStore(User user, Integer storeId);
    User createUser(RegisterRequest registerRequest);
}