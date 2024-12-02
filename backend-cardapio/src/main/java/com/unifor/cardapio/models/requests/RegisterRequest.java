package com.unifor.cardapio.models.requests;

import com.unifor.cardapio.enums.UserRole;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
public class RegisterRequest {
    @NotNull
    private String username;
    @NotNull
    private String password;
    @NotNull
    private String email;
    @NotNull
    private String name;
    @NotNull
    private UserRole role;
    private Integer storeId;


}
