package com.unifor.cardapio.config;

import org.springdoc.core.customizers.OpenApiCustomizer;
import io.swagger.v3.oas.models.parameters.Parameter;
import io.swagger.v3.oas.models.media.StringSchema;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenApiCustomizer addGlobalHeaders() {
        return openApi -> openApi.getPaths().values().forEach(pathItem ->
                pathItem.readOperations().forEach(operation -> {
                    Parameter authHeader = new Parameter()
                            .in("header")
                            .schema(new StringSchema())
                            .name("Authorization")
                            .description("Token JWT para autenticação")
                            .required(true);

                    operation.addParametersItem(authHeader);
                })
        );
    }
}
