import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login';
import NotFoundPage from './pages/not-found/not-found';
import { ThemeProvider } from './components/theme-provider';
import MenuPage from './pages/menu/menu';
import { OrderProvider } from './contexts/order/order-provider';

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={
            <OrderProvider> 
              <MenuPage/> 
            </OrderProvider>}
          />
          <Route path="/login" element={
            <LoginPage/>} 
          />
          <Route path="*" element={
            <NotFoundPage />} 
          />
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
