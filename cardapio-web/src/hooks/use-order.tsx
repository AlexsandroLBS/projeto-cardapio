import { OrderContext } from '@/contexts/order/order-context';
import { useContext } from 'react';

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }

  return context;
};
