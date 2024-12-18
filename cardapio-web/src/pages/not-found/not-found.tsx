import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! Essa página não existe!</p>
      <Button variant="outline" onClick={handleGoHome}>
        Voltar
      </Button>
    </div>
  );
};

export default NotFoundPage;
