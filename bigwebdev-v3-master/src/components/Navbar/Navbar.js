import "./Navbar.css"

function Navbar() {

	return (
		<div className="navbar">
			<ul>
				<li>Profile</li>
				<li>Skills</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
			<div id="navbar-download">Download CV</div>
		</div>
	)
}

export default Navbar