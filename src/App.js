import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Shop from './pages/Shop';
import ScrollToTop from './components/ScrollToTop';
import ChangeHeader from './components/ChangeHeader';
import SideMenu from './components/SideMenu';
import Iphone11ProMax from './components/Iphone11ProMax';

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
				<Route path="/Iphone11ProMax.js" component={Iphone11ProMax} />
			</Switch>

			{/* Footer */}
			<Footer></Footer>
		</Router>
	);
}

export default App;
