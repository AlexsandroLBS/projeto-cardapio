import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import NotFoundPage from "./pages/not-found/not-found";
import { ThemeProvider } from "./components/theme-provider";
import MenuPage from "./pages/menu/menu";
import { OrderProvider } from "./contexts/order/order-provider";
import StoreIdHandler from "./utils/handlers/store-id-handler";
import { Toaster } from "./components/ui/sonner";
import { UserProvider } from "./contexts/user/userContext";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <ThemeProvider storageKey="vite-ui-theme">
        <UserProvider>
          <Router>
            <StoreIdHandler />
            <Routes>
              <Route
                path="/s/:storeId"
                element={
                  <OrderProvider>
                    <MenuPage />
                  </OrderProvider>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={
                  <OrderProvider>
                    <Home />
                  </OrderProvider>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
          <Toaster />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
