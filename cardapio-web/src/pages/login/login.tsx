import React, { useEffect, useState } from "react";
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
import { loginUser, RegisterRequest, registerUser } from "@/services/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useUserContext } from "@/contexts/user/userContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createStore } from "@/services/stores";

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
  role: string;
  storeName: string;
  address: string;
  phone: string;
  imageUrl: string;
  description: string;
};

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("login");
  const { refreshUser } = useUserContext();
  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormInputs>();

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    setValue,
    watch,
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
          toast.success("Login realizado com sucesso!");
          refreshUser();
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          console.error("wrong passoword", err);
          toast.error("Usuário ou senha incorretos");
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

    let storeId = 0;

    if (data.role === "VENDOR") {
      const store = {
        name: data.storeName,
        description: data.description,
        address: data.address,
        phone: data.phone,
        imageUrl: data.imageUrl,
      };

      await createStore(store).then((res) => {
        if (res && res.id) storeId = res.id;
      });
    }

    const body: RegisterRequest = {
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      role: data.role,
    };

    if (storeId) body.storeId = storeId;

    return await registerUser(body)
      .then(() => {
        toast.success("Usuário cadastrado com sucesso!");
        setActiveTab("login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
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
                        <Label htmlFor="email">Usuário</Label>
                      </div>
                      <Input
                        id="username"
                        type="text"
                        error={!!loginErrors.username}
                        {...registerLogin("username", {
                          required: "Usuário é obrigatório",
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
                        <Label htmlFor="role">Tipo de Usuário</Label>
                      </div>
                      <Select
                        onValueChange={(value) =>
                          setValue("role", value, { shouldValidate: true })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione o tipo de usuário" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CLIENT">Cliente</SelectItem>
                          <SelectItem value="VENDOR">Vendedor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
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
                        <Label htmlFor="username">Usuário</Label>
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
                    {watch("role") === "VENDOR" && (
                      <>
                        <div className="mb-4 space-y-4">
                          <div className="flex start pb-1">
                            <Label htmlFor="storeName">Nome da Empresa</Label>
                          </div>
                          <Input
                            id="storeName"
                            {...registerSignup("storeName", {
                              required:
                                "Nome da empresa é obrigatório para vendedores",
                            })}
                            placeholder="Digite o nome da empresa"
                          />
                        </div>
                        <div className="mb-4">
                          <div className="flex start pb-1">
                            <Label htmlFor="storeName">Descrição</Label>
                          </div>
                          <Input
                            id="storeName"
                            {...registerSignup("storeName", {
                              required:
                                "Descrição é obrigatório para vendedores",
                            })}
                            placeholder="Digite uma descrição do seu negócio"
                          />
                        </div>
                        <div className="mb-4">
                          <div className="flex start pb-1">
                            <Label htmlFor="storeName">Imagem da empresa</Label>
                          </div>
                          <Input
                            id="imageUrl"
                            {...registerSignup("imageUrl", {
                              required: "Imagem da empresa é obrigatório",
                            })}
                            placeholder="Digite um URL da imagem da sua empresa"
                          />
                        </div>
                        <div className="mb-4">
                          <div className="flex start pb-1">
                            <Label htmlFor="address">Endereço</Label>
                          </div>
                          <Input
                            id="address"
                            {...registerSignup("address", {
                              required:
                                "Endereço é obrigatório para vendedores",
                            })}
                            placeholder="Digite o endereço da empresa"
                          />
                        </div>
                        <div className="mb-4">
                          <div className="flex start pb-1">
                            <Label htmlFor="phone">Telefone</Label>
                          </div>
                          <Input
                            id="phone"
                            {...registerSignup("phone", {
                              required:
                                "Telefone é obrigatório para vendedores",
                            })}
                            placeholder="Digite o telefone da empresa"
                          />
                        </div>
                      </>
                    )}
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
