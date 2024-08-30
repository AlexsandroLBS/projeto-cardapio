import { ModeToggle } from "@/components/generics/mode-toggle";
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
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    setError(null);

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    console.log("Logging in with:", { email, password });
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="flex justify-center items-center ">
        <div className="w-full  max-w-md p-8 shadow-md rounded-lg">
          <Tabs defaultValue="login" className="w-[400px] ">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Criar conta</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Já tem conta? Faça login abaixo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="mb-4" >
                    <div className="flex start pb-1">
                      <Label htmlFor="email">Email</Label>
                    </div>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Digite seu email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex start pb-1">
                      <Label htmlFor="password">Senha</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Digite sua senha"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter style={{display: 'flex', justifyContent: 'center'}}>
                  <Button className="w-[200px]">Entrar</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Cadastro</CardTitle>
                  <CardDescription>
                    Não tem conta? Cadastre-se abaixo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="mb-4" >
                    <div className="flex start pb-1">
                      <Label htmlFor="nome">Nome Completo</Label>
                    </div>
                    <Input
                      id="nome"
                      type="nome"
                      value={email}
                      onChange={(e) => (e.target.value)}
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>
                  <div className="mb-4" >
                    <div className="flex start pb-1">
                      <Label htmlFor="email">Email</Label>
                    </div>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  <div className="mb-4" >
                    <div className="flex start pb-1">
                      <Label htmlFor="telefone">Telefone</Label>
                    </div>
                    <Input
                      id="telefone"
                      type="telefone"
                      value={email}
                      onChange={(e) => (e.target.value)}
                      placeholder="(99) 99999-9999"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter style={{display: 'flex', justifyContent: 'center'}}>
                  <Button className="w-[200px]">Criar conta</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
