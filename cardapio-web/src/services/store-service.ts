import { Store } from "@/models/store/store";

class StoreService {
  private stores: Store[] = [
    {
        id: 'teste',
        name: 'Loja teste',
        description: '',
        logo: {
            url: 'https://images.tcdn.com.br/img/img_prod/1067984/180_pin_2031_1_20879ae56084f42b0852985692b9ad74.jpg'
        },
        banner: {
            url: 'https://www.colegiosantoantonio.com.br/wp-content/uploads/bfi_thumb/banner-teste-31spv5ur4hg9927ikb83r4.jpg'
        },
        schedules: {
            sunday: { startTime: '', endTime: '', closed: false },
            monday: { startTime: '', endTime: '', closed: false },
            tuesday: { startTime: '', endTime: '', closed: false },
            wednesday: { startTime: '', endTime: '', closed: false },
            thursday: { startTime: '', endTime: '', closed: false },
            friday: { startTime: '', endTime: '', closed: false },
            saturday: { startTime: '', endTime: '', closed: false }
        },
        rating: 4.5
    },
    {
        id: 'teste2',
        name: 'Loja 2',
        description: '',
        logo: {
            url: 'https://lh3.googleusercontent.com/p/AF1QipMC2nfXeATKxmY9eOOQftLOO4biC2Y1MgNx_ch5=s1360-w1360-h1020'
        },
        banner: {
            url: 'https://lh3.googleusercontent.com/p/AF1QipPwpMkmLCwa6U6P65OSUob45RkXge4_CU8i-ijg=s1360-w1360-h1020'
        },
        schedules: {
            sunday: { startTime: '', endTime: '', closed: false },
            monday: { startTime: '', endTime: '', closed: false },
            tuesday: { startTime: '', endTime: '', closed: false },
            wednesday: { startTime: '', endTime: '', closed: false },
            thursday: { startTime: '', endTime: '', closed: false },
            friday: { startTime: '', endTime: '', closed: false },
            saturday: { startTime: '', endTime: '', closed: false }
        },
        rating: 4.9
    }
  ];
  
  
  

    getStore(): Store | undefined{
        return this.stores.find(store => store.id == localStorage.getItem('storeId'))
    }
  }
  
  export const storeService = new StoreService();
  