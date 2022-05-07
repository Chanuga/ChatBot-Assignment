import Album from './Components/Album/Album';
import Chat from './Components/Chat/Chat';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import TopNavigation from './Components/Navigation/TopNavigation';
import New from './Components/New/New';
import Welcome from './Components/Welcome/Welcome';

function App() {
	return (
		<div>
			<TopNavigation />
			<Home />
			<Welcome />
			<Album />
			<New />
			<Footer />
			<Chat />
		</div>
	);
}

export default App;
