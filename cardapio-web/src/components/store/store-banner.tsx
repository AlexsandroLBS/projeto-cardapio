import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { Store } from "@/services/stores";

interface StoreBannerProps {
  store: Store;
}

export const StoreBanner: FC<StoreBannerProps> = ({ store }) => {
  const isOpen = true;
  const openingText = isOpen ? "Aberto agora" : "Fechado no momento";

  return (
    <div className="relative mb-10">
      <div className="relative h-64 w-full">
        <img
          src={store.imageUrl}
          alt={`${store.name} banner`}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      <div
        style={{ backgroundColor: "hsl(var(--popover))" }}
        className="flex items-center h-30 p-4 shadow-lg rounded-b-lg justify-between"
      >
        <div className="flex items-center">
          <img
            src={store.imageUrl}
            alt={`${store.name} logo`}
            className="h-16 w-16 rounded-full bg-white p-1"
          />
          <h1 className="text-xl ml-4 font-bold">{store.name}</h1>
        </div>

        <div className="ml-4">
          <div className="flex items-center text-sm text-gray-500">
            <Badge className="bg-white text-black ml-5">{openingText}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
