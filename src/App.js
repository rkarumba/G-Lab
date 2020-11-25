import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Shop from './pages/Shop';
import ScrollToTop from './components/ScrollToTop';
import ChangeHeader from './components/ChangeHeader';
import SideMenu from './components/SideMenu';
import Product from './components/Product';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<ChangeHeader />
			<SideMenu />
			{/* Header */}
			<Header></Header>

			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/Shop.js" component={Shop} />
				<Route path="/Product.js" component={Product} />
			</Switch>

			{/* Footer */}
			<Footer></Footer>
		</Router>
	);
}

export default App;
