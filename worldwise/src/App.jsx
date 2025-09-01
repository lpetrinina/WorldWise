import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

import CityList from "./components/city/CityList";
import CountryList from "./components/country/CountryList";
import City from "./components/city/City";
import Form from "./components/form/Form";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/common/spinner/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <Suspense key={"home"} fallback={<SpinnerFullPage />}>
                  <Homepage />
                </Suspense>
              }
            />
            <Route
              path='pricing'
              element={
                <Suspense key={"pricing"} fallback={<SpinnerFullPage />}>
                  <Pricing />
                </Suspense>
              }
            />
            <Route
              path='product'
              element={
                <Suspense key={"product"} fallback={<SpinnerFullPage />}>
                  <Product />
                </Suspense>
              }
            />
            <Route
              path='login'
              element={
                <Suspense key={"login"} fallback={<SpinnerFullPage />}>
                  <Login />
                </Suspense>
              }
            />

            <Route
              path='app'
              element={
                <ProtectedRoute>
                  <Suspense key={"app"} fallback={<SpinnerFullPage />}>
                    <AppLayout />
                  </Suspense>
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to={"cities"} />} />
              <Route path='cities' element={<CityList />} />
              <Route path='cities/:id' element={<City />} />
              <Route path='countries' element={<CountryList />} />
              <Route path='form' element={<Form />} />
            </Route>
            <Route
              path='*'
              element={
                <Suspense key={"not-found"} fallback={<SpinnerFullPage />}>
                  <PageNotFound />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
