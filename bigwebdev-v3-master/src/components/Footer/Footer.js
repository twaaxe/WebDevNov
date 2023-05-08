import "./Footer.css";

function Footer() {
	return (
		<div className="footer-flex">


			<div className="footer-map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40282.45122314295!2d4.6957576!3d50.874619749999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1612ac666dd03%3A0xf825359e0e63edd!2s3000%20Leuven!5e0!3m2!1snl!2sbe!4v1679565311654!5m2!1snl!2sbe"
					loading="lazy"
					title="gmap"
				/>

				<div className="hexagon">
					<div className="hexagon-top"></div>
					<div className="hexagon-bottom"></div>
				</div>
			</div>

			<div className="footer-contact">

				<a href="/files/MoermansJonathan_CV.pdf" id="download-button" download>
					<button id="download-cv-footer">Download CV</button>
				</a>
				<div className="text">
					<div className="gray">Telephone</div>
					<div>+32 498 694 006</div>
				</div>
				<div className="text">
					<div className="gray">E-mail</div>
					<div>Jonathan@bigwebdev.be</div>
				</div>
				<div className="text">
					<div className="gray">Location</div>
					<div>3000 Leuven</div>
					<div>Belgium</div>
				</div>

				<div>
					<div className="gray">Social</div>
					<div>
						<a href={"https://github.com/MoermansJ"} rel="noreferrer" target="_blank">
							<img className="socials-icon" id="icon-github" src="https://icones.pro/wp-content/uploads/2021/06/icone-github-violet.png" alt="github" />
						</a>
						<a href={"https://www.linkedin.com/in/jonathan-moermans/"} rel="noreferrer" target="_blank">
							<img className="socials-icon" src="https://www.svgrepo.com/show/303207/linkedin-icon-logo.svg" alt="linkedin" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
