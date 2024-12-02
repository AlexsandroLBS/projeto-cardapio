import { useEffect, useState } from "react";
import ProductGalery from "@/components/product/product-galery";
import Navbar from "@/components/generics/navbar/navbar";
import "./menu.css";
import ProductCarousel from "@/components/product/product-carousel";
import { Separator } from "@/components/ui/separator";
import { StoreBanner } from "@/components/store/store-banner";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { getStore, Store } from "@/services/stores";
import { useUserContext } from "@/contexts/user/userContext";
import { Dish, getDishes } from "@/services/dishes";
import AddDishSheet from "../../components/store/AddDishSheet";

export default function MenuPage() {
  const { user } = useUserContext();
  const { storeId } = useParams();
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [store, setStore] = useState<Store>();
  const [isAddDishSheetOpen, setAddDishSheetOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (storeId)
      Promise.all([
        getStore(storeId).then((res) => {
          setStore(res);
        }),
        getDishes(storeId).then((res) => {
          setDishes(res);
        }),
      ]);
  }, [storeId]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="mt-12">
        {store == null ? (
          <div className="flex w-full flex-col justify-center items-center gap-4">
            <p>Loja nao encontrada</p>
            <Button onClick={() => navigate("/")}>Home</Button>
          </div>
        ) : (
          <>
            <div className="menuContent flex flex-col">
              <StoreBanner store={store}></StoreBanner>
              {(user?.role === "ROLE_VENDOR" ||
                user?.role === "ROLE_ADMIN") && (
                <Button onClick={() => setAddDishSheetOpen(true)}>
                  Adicionar prato
                </Button>
              )}
            </div>

            {dishes.length > 0 ? (
              <>
                <div className="menuCarousel">
                  <h2 className="title">Destaques</h2>
                  <ProductCarousel products={dishes}></ProductCarousel>
                </div>
                <div className="menuContent">
                  <Separator></Separator>
                  <h2 className="title">Produtos</h2>
                  <ProductGalery products={dishes}></ProductGalery>
                </div>
              </>
            ) : (
              <p className="flex justify-center">Sem produtos cadastrados</p>
            )}
          </>
        )}
      </div>

      <AddDishSheet
        isOpen={isAddDishSheetOpen}
        onClose={() => setAddDishSheetOpen(false)}
        storeId={store?.id}
        setDishes={setDishes}
      />
    </>
  );
}
