import { Categories } from "@/models/categories";

class CategoriesService {
    private categories: Categories[] = [
        { id: '1', name: 'Categoria 1' },
        { id: '2', name: 'Categoria 2' },
        { id: '3', name: 'Categoria 3' },
      ];

    getCategories(): Categories[]{
        return this.categories
    }
  }
  
  export const categoriesService = new CategoriesService();
  