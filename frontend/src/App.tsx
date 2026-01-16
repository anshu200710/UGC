import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Routes, Route } from 'react-router-dom';
import Community from './pages/Community';
import Plan from './pages/Plan';
import Result from './pages/Result';
import Create from './pages/Create';
import MyGeneration from './pages/MyGeneration';
import Loading from './pages/Loading';

function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />
			<Routes >
				<Route path='/' element={<Home />} />	
				<Route path='/community' element={<Community />} />
				<Route path='/plan' element={<Plan />} />
				<Route path='/result/:projectId' element={<Result />} />
				<Route path='/create' element={<Create />} />
				<Route path='/mygeneration' element={<MyGeneration />} />
				<Route path='/loading' element={<Loading />} />
			</Routes>
			<Footer />
		</>
	);
}
export default App;