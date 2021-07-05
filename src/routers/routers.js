import Contact from '../containers/Contact/Contact';
import Intro from '../containers/Intro/pages/Intro';
import Faq from '../containers/Intro/pages/Faq';
import Pay from '../containers/Intro/pages/Pay';
import Replace from '../containers/Intro/pages/Replace';
import Ship from '../containers/Intro/pages/Ship';
import Shop from '../containers/Intro/pages/Shop';
import News from '../containers/News/News';
import Product from '../containers/Product/pages/ProductPage/ProductPage';
import ProductMen from '../containers/Product/pages/ProductMenPage/ProductMenPage';
import ProductWomen from '../containers/Product/pages/ProductWomenPage/ProductWomenPage';
import ProductExtra from '../containers/Product/pages/ProductExtraPage/ProductExtraPage';
import Cart from '../features/Cart/Cart';
import DetailProduct from '../containers/Product/pages/DetailProduct/DetailProduct';
import Login from '../features/Auth/components/Login';
import Signup from '../features/Auth/components/Signup';
import Forget from '../features/Auth/components/Forget';
import Account from '../features/Auth/components/Account';
import Search from '../features/Search/SearchPage';
import ProductProducer from '../containers/Product/pages/ProductProducer/ProductProducer';
import ExtraProducer from '../containers/Product/pages/ExtraProducer/ExtraProducer';
import DetailNews from '../containers/News/DetailNews';

const routes = [
    {
        exact: false,
        path: '/contact',
        main: () => <Contact></Contact>
    },
    {
        exact: false,
        path: '/intro',
        main: () => <Intro></Intro>
    },
    {
        exact: false,
        path: '/intro-faq',
        main: () => <Faq></Faq>
    },
    {
        exact: false,
        path: '/intro-pay',
        main: () => <Pay></Pay>
    },
    {
        exact: false,
        path: '/intro-replace',
        main: () => <Replace></Replace>
    },
    {
        exact: false,
        path: '/intro-ship',
        main: () => <Ship></Ship>
    },
    {
        exact: false,
        path: '/intro-shop',
        main: () => <Shop></Shop>
    },
    {
        exact: false,
        path: '/news',
        main: () => <News></News>
    },
    {
        exact: false,
        path: '/product',
        main: () => <Product></Product>
    },
    {
        exact: false,
        path: '/productmen',
        main: () => <ProductMen></ProductMen>
    },
    {
        exact: false,
        path: '/productwomen',
        main: () => <ProductWomen></ProductWomen>
    },
    {
        exact: false,
        path: '/productextra',
        main: () => <ProductExtra></ProductExtra>
    },
    {
        exact: false,
        path: '/cart',
        main: () => <Cart></Cart>
    },
    {
        exact: false,
        path: '/login',
        main: () => <Login></Login>
    },
    {
        exact: false,
        path: '/signup',
        main: () => <Signup></Signup>
    },
    {
        exact: false,
        path: '/forget',
        main: () => <Forget></Forget>
    },
    {
        exact: false,
        path: '/account',
        main: () => <Account></Account>
    },
    {
        exact: false,
        path: '/search',
        main: () => <Search></Search>
    },
    {
        exact: false,
        path: '/detailproduct/:slug',
        main: ({ match }) => <DetailProduct match={match}></DetailProduct>
    },
    {
        exact: false,
        path: '/productproducer/:slug',
        main: ({ match }) => <ProductProducer match={match}></ProductProducer>
    },
    {
        exact: false,
        path: '/extraproducer/:slug',
        main: ({ match }) => <ExtraProducer match={match}></ExtraProducer>
    },
    {
        exact: false,
        path: '/detailnews/:slug',
        main: ({ match }) => <DetailNews match={match}></DetailNews>
    }
];

export default routes;