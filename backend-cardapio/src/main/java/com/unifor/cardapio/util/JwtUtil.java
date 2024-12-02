package com.unifor.cardapio.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.Map;

@Component
public class JwtUtil {

    private static final String SECRET_KEY = "aHVwN2JrNTQmK$Fxd!Nz*GxZp3D9bYm@u";
    private static final int EXPIRATION_TIME = 3600000;

    private final Key key;

    public JwtUtil() {
        try {
            this.key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
            System.out.println("JWT Util Initialized with Key: " + new String(SECRET_KEY.getBytes()));
        } catch (Exception e) {
            throw new RuntimeException("Failed to initialize JWT secret key", e);
        }
    }


    public String generateToken(Authentication authentication, Map<String, Object> userInfo) {
        return Jwts.builder()
                .setSubject(authentication.getName())
                .addClaims(userInfo)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }



    public String extractUsername(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean isTokenValid(String token, String username) {
        return extractUsername(token).equals(username) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getExpiration()
                .before(new Date());
    }
}
