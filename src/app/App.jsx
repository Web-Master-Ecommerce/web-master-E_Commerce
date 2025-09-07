import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./../context/AuthContext";
import Middleware from '../middleware';
import * as Pages from '.';
import Details from './../Components/Details/Details';
import ViewProducts from "../Components/ViewProducts/ViewProducts";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Layout Routes */}
        <Route element={<Pages.Layouts />}>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/shop" element={<Pages.Shop />} />
          <Route path="/about" element={<Pages.About />} />
          <Route path="/compare" element={<Pages.Compare />} />
          <Route path="/blog" element={<Pages.Blog />} />
          <Route path="/contact" element={<Pages.Contact />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/viewProducts" element={<ViewProducts />} />

          <Route
            path="/wishlist"
            element={
              <Middleware>
                <Pages.WishList />
              </Middleware>
            }
          />
          <Route
            path="/cart"
            element={
              <Middleware>
                <Pages.Cart />
              </Middleware>
            }
          />
        </Route>

        {/* Auth Routes Out Layout */}
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/register" element={<Pages.Register />} />

        {/* Page Not Found */}
        <Route path="*" element={<Pages.Error />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
