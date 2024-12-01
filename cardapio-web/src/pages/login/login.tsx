import React, { useEffect, useState } from "react";
import Navbar from "@/components/generics/navbar/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loginUser, registerUser } from "@/services/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type LoginFormInputs = {
  username: string;
  password: string;
};

type SignupFormInputs = {
  username: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("login");

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormInputs>();

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
  } = useForm<SignupFormInputs>();

  const navigate = useNavigate();

  useEffect(() => {
    const isConnected = localStorage.getItem("token");
    if (isConnected) {
      navigate("/");
    }
  }, [navigate]);

  const onLoginSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const body = { username: data.username, password: data.password };
    return await loginUser(body)
      .then((res) => {
        if (typeof res === "string") {
          localStorage.setItem("token", res);
          toast("Login realizado com sucesso!");
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          console.error("wrong passoword", err);
          toast("Usuário ou senha incorretos");
          return;
        }
        console.error("login failed:", err);
        toast("Erro ao realizar login");
      });
  };

  const onSignupSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    if (data.password !== data.passwordConfirm) {
      alert("Senhas não coincidem");
      return;
    }
    const body = {
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      role: "ADMIN",
    };

    return await registerUser(body)
      .then(() => {
        toast("Usuário cadastrado com sucesso!");
        setActiveTab("login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center mt-16">
        <div className="w-full max-w-md p-6 shadow-md rounded-lg">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-[400px]"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Criar conta</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
                <Card>
                  <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                      Já tem conta? Faça login abaixo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="mb-4">
                      <div className="flex start pb-1">
                        <Label htmlFor="email">Nome de Usuário</Label>
                      </div>
                      <Input
                        id="username"
                        type="text"
                        error={!!loginErrors.username}
                        {...registerLogin("username", {
                          required: "Nome é obrigatório",
                        })}
                        placeholder="Digite seu usuário"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex start pb-1">
                        <Label htmlFor="password">Senha</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        error={!!loginErrors.password}
                        {...registerLogin("password", {
                          required: "Senha é obrigatória",
                        })}
                        placeholder="Digite sua senha"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button type="submit" className="w-[200px]">
                      Entrar
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form onSubmit={handleSignupSubmit(onSignupSubmit)}>
                <Card>
                  <CardHeader>
                    <CardTitle>Cadastro</CardTitle>
                    <CardDescription>
                      Não tem conta? Cadastre-se abaixo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="mb-4">
                      <div className="flex start pb-1">
                        <Label htmlFor="name">Nome Completo</Label>
                      </div>
                      <Input
                        id="name"
                        error={!!signupErrors.name}
                        {...registerSignup("name", {
                          required: "Nome é obrigatório",
                        })}
                        placeholder="Digite seu nome"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex start pb-1">
                        <Label htmlFor="username">Nome de Usuário</Label>
                      </div>
                      <Input
                        id="username"
                        error={!!signupErrors.username}
                        {...registerSignup("username", {
                          required: "Nome de Usuário é obrigatório",
                        })}
                        placeholder="Digite seu nome"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex start pb-1">
                        <Label htmlFor="email">Email</Label>
                      </div>
                      <Input
                        id="email"
                        type="email"
                        error={!!signupErrors.email}
                        {...registerSignup("email", {
                          required: "Email é obrigatório",
                        })}
                        placeholder="Digite seu email"
                      />
                      {signupErrors.email && (
                        <Label>{signupErrors.email.message}</Label>
                      )}
                    </div>
                    <div className="mb-4">
                      <div className="flex start pb-1">
                        <Label htmlFor="password">Senha</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        error={!!signupErrors.password}
                        {...registerSignup("password", {
                          required: "Senha é obrigatória",
                        })}
                        placeholder="Digite sua senha"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex start pb-1">
                        <Label htmlFor="passwordConfirm">
                          Confirme sua senha
                        </Label>
                      </div>
                      <Input
                        id="passwordConfirm"
                        type="password"
                        error={!!signupErrors.passwordConfirm}
                        {...registerSignup("passwordConfirm", {
                          required: "Confirmação de senha é obrigatória",
                        })}
                        placeholder="Confirme sua senha"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button type="submit" className="w-[200px]">
                      Criar conta
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
