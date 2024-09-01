import { Product } from "@/models/product";

class ProductService {
  private products: Product[] = [
    {
      id: '10',
      title: 'Comidinha',
      price: 99.99,
      originalPrice: 119.99,
      servingSize: "3",
      weight: "500g", 
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/2998a2bd-1159-4334-9c95-5eb6c4f9abb4/202403290945_0FD8_i.jpg',
      },
    },
    {
      id: '2',
      title: 'Almociiinhuuu',
      price: 19.99,
      originalPrice: 19.99,
      servingSize: "2",
      weight: "350g",
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/2998a2bd-1159-4334-9c95-5eb6c4f9abb4/202404111126_Y1H1_i.jpg',
      },
    },
    {
      id: '3',
      title: 'Produto 3',
      price: 29.99,
      originalPrice: 34.99,
      servingSize: "1",
      weight: "200g",
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/2998a2bd-1159-4334-9c95-5eb6c4f9abb4/202402161024_I7J3_i.jpg',
      },
    },
    {
      id: '4',
      title: 'Produto 4',
      price: 179.99,
      originalPrice: 199.99,
      servingSize: "4",
      weight: "1kg",
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/2998a2bd-1159-4334-9c95-5eb6c4f9abb4/202401161317_T61T_i.jpg',
      },
    },
    {
      id: '10',
      title: 'Produto 1',
      price: 99.99,
      originalPrice: 109.99,
      servingSize: "3",
      weight: "500g",
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/2998a2bd-1159-4334-9c95-5eb6c4f9abb4/202403290945_0FD8_i.jpg',
      },
    },
    {
      id: '2',
      title: 'Produto 2',
      price: 19.99,
      originalPrice: 19.99,
      servingSize: "2",
      weight: "350g",
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/2998a2bd-1159-4334-9c95-5eb6c4f9abb4/202404111126_Y1H1_i.jpg',
      },
    },
    {
      id: '4',
      title: 'Produto 4',
      price: 179.99,
      originalPrice: 179.99,
      servingSize: "4",
      weight: "1kg",
      image: {
        url: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/04c8be63-4aa5-4c4e-9cf6-5e4f8f612b96/202111021944_Y822_i.jpg",
      },
    },
    {
      id: '3',
      title: 'Produto 3',
      price: 29.99,
      originalPrice: 39.99,
      servingSize: "1",
      weight: "200g",
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/2998a2bd-1159-4334-9c95-5eb6c4f9abb4/202402161024_I7J3_i.jpg',
      },
    },
    {
      id: '4',
      title: 'Produto 4',
      price: 179.99,
      originalPrice: 199.99,
      servingSize: "4",
      weight: "1kg",
      image: {
        url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/2998a2bd-1159-4334-9c95-5eb6c4f9abb4/202401161317_T61T_i.jpg',
      },
    },
  ];
  
  
  

    getTopProducts(): Product[]{
        return this.products
    }
    getProducts(): Product[] {
      return this.products;
    }
  }
  
  export const productService = new ProductService();
  