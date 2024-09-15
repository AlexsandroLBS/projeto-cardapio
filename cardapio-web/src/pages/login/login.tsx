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
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginFormInputs = {
	email: string;
	password: string;
};

type SignupFormInputs = {
	nome: string;
	email: string;
	telefone: string;
	senha: string;
	senhaConfirm: string;
};

const LoginPage: React.FC = () => {
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

	const onLoginSubmit: SubmitHandler<LoginFormInputs> = (data) => {
		console.log("Logging in with:", data);
	};

	const onSignupSubmit: SubmitHandler<SignupFormInputs> = (data) => {
		if (data.senha !== data.senhaConfirm) {
			alert("Senhas não coincidem");
			return;
		}
		console.log("Signing up with:", data);
	};

	return (
		<>
			<Navbar />

			<div className="flex justify-center items-center ">
				<div className="w-full max-w-md p-8 shadow-md rounded-lg">
					<Tabs defaultValue="login" className="w-[400px]">
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
												<Label htmlFor="email">Email</Label>
											</div>
											<Input
												id="email"
												type="email"
												error={!!loginErrors.email}
												{...registerLogin("email", { required: "Email é obrigatório" })}
												placeholder="Digite seu email"
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
												{...registerLogin("password", { required: "Senha é obrigatória" })}
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
												<Label htmlFor="nome">Nome Completo</Label>
											</div>
											<Input
												id="nome"
												error={!!signupErrors.nome}
												{...registerSignup("nome", { required: "Nome é obrigatório" })}
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
												{...registerSignup("email", { required: "Email é obrigatório" })}
												placeholder="Digite seu email"
											/>
											{signupErrors.email && <Label>{signupErrors.email.message}</Label>}
										</div>
										<div className="mb-4">
											<div className="flex start pb-1">
												<Label htmlFor="telefone">Telefone</Label>
											</div>
											<Input
												id="telefone"
												error={!!signupErrors.telefone}
												{...registerSignup("telefone", { required: "Telefone é obrigatório" })}
												placeholder="(99) 99999-9999"
											/>
										</div>
										<div className="mb-4">
											<div className="flex start pb-1">
												<Label htmlFor="senha">Senha</Label>
											</div>
											<Input
												id="senha"
												type="password"
												error={!!signupErrors.senha}
												{...registerSignup("senha", { required: "Senha é obrigatória" })}
												placeholder="Digite sua senha"
											/>
										</div>
										<div className="mb-4">
											<div className="flex start pb-1">
												<Label htmlFor="senhaConfirm">Confirme sua senha</Label>
											</div>
											<Input
												id="senhaConfirm"
												type="password"
												error={!!signupErrors.senhaConfirm}
												{...registerSignup("senhaConfirm", { required: "Confirmação de senha é obrigatória" })}
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
