import AdminProductListPage from "../pages/admin/AdminProductListPage";
import AdminOrdersPage from "../pages/admin/AdminOrdersPage";
import AdminUsersPage from "../pages/admin/AdminUsersPage";


  return (
    <Routes>
      <Route path="/" element={<AdminPanel />} />
      <Route path="/products" element={<AdminProductListPage />} />
      <Route path="/orders" element={<AdminOrdersPage />} />
      <Route path="/users" element={<AdminUsersPage />} />
    </Routes>
  );


export default AdminRoutes;