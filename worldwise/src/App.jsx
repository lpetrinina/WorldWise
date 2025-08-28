import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/city/CityList";
import CountryList from "./components/country/CountryList";
import City from "./components/city/City";
import Form from "./components/form/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='product' element={<Product />} />
            <Route path='login' element={<Login />} />

            <Route path='app' element={<AppLayout />}>
              <Route index element={<Navigate replace to={"cities"} />} />
              <Route path='cities' element={<CityList />} />
              <Route path='cities/:id' element={<City />} />
              <Route path='countries' element={<CountryList />} />
              <Route path='form' element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
