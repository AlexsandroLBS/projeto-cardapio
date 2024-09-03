import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { Store } from "@/models/store/store";

interface StoreBannerProps {
  store: Store;
}

export const StoreBanner: FC<StoreBannerProps> = ({ store }) => {
  const isOpen = true; // TODO ajeitar isso aqui
  const openingText = isOpen ? "Aberto agora" : `Abre ${store.schedules}`;

  return (
    <div className="relative mb-10">
      <div className="relative h-64 w-full">
        <img
          src={store.banner.url}
          alt={`${store.name} logo`}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>


      <div className="flex items-center h-30 bg-white p-4 shadow-lg rounded-b-lg">
        <img
          src={store.logo.url}
          alt={`${store.name} logo`}
          className="h-20 w-20 rounded-full bg-white p-1"
        />
        <h1 className="text-xl ml-4 font-bold">{store.name}</h1>

        <div className="ml-4">
          <div className="flex items-center text-sm text-gray-500">
            <p>
              {store.orderMinValue
                ? `Pedido mínimo R$ ${store.orderMinValue}`
                : "Sem pedido mínimo"}
            </p>
            <span className="ml-2 text-yellow-500">⭐ {store.rating}</span>
            <Badge className="bg-white text-black ml-5">
              {openingText}
            </Badge>
          </div>
        </div>
        <div className="ml-auto text-green-500">
          <a href="#">Ver mais</a>
        </div>
      </div>
    </div>
  );
};
