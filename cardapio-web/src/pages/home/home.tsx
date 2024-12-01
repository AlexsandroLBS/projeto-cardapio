import Navbar from "@/components/generics/navbar/navbar";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/contexts/user/userContext";
import { getStores, Store } from "@/services/stores";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [stores, setStores] = useState<Store[]>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    getStores().then((data) => {
      setStores(data);
    });
  }, []);

  useEffect(() => {
    console.log(stores);
  }, [stores]);

  return (
    <>
      <Navbar />
      {user && user.role === "ROLE_ADMIN" && (
        <div className="mt-12">
          <div className="flex justify-end w-full ">
            <Button>Criar Loja</Button>
          </div>
        </div>
      )}
    </>
  );
}
