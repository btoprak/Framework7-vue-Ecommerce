import Home from './pages/Home';
import AboutPage from './pages/About';
import CategoryList from './components/Category.vue';
import ProductDetail from './components/ProductDetail.vue';
import LoginPage from './components/user/Login.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path:'/login',
    component: LoginPage
  },
  {
    path:'/Product/:id',
    component: ProductDetail
  },
  {
    path: '/Category/:id',
    component: CategoryList
  },
  {
    path: '/ShoppingCart',
    component: ShoppingCart,
  },

];
