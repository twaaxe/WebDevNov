import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
	// gsap.registerPlugin(ScrollTrigger);

	// useEffect(() => {
	//   gsap.fromTo(
	//     ".fade-in",
	//     { x: -50, opacity: 0 },
	//     { x: 0, opacity: 1, stagger: 0.1, duration: 0.75 }
	//   );

	//   gsap.to("#landing-image-layer2", {
	//     y: 20,
	//     scrollTrigger: { scrub: 1 },
	//   });
	// });


	return (
		<div className="App">
			<div className="wrapper">
				<div className="background"></div>
				<div className="foreground">
					{/* <Navbar />
					<Landing /> */}
					<Profile />
					{/* <Projects />
					<Contact />
					<Footer /> */}
				</div>
			</div>
		</div>
	);
}

export default App;
