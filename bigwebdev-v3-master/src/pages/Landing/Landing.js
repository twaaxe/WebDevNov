import "./Landing.css"


function Landing() {

	return (
		<div className="landing">
			{/* <svg viewBox="0 0 500 130" preserveAspectRatio="xMinYMin meet" className="svg-top-wave">
				<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
			</svg> */}

			<svg className="svg-top-wave" viewBox="0 0 1200 120">
				<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
			</svg>

			<div className="landing-content">

				<h2 className="landing-title">Find me here - {" "}
					<a href="https://www.linkedin.com/in/jonathan-moermans/" target="_blank" rel="noreferrer">LinkedIn</a> - {" "}
					<a href="https://github.com/MoermansJ" target="_blank" rel="noreferrer">Github</a> - {" "}
					<a href="/files/MoermansJonathan_CV.pdf" download>Download CV</a>
				</h2>
				<img className="laptop-img" src="/images/laptop.svg" alt="illustration of a laptop" />
			</div>

			{/* <svg viewBox="0 0 1440 560">
				<g mask="url('#SvgjsMask1000')" fill="none">
					<rect width="1440" height="560" x="0" y="0" fill="#1e3266"></rect>
					<path d="M1536 560L0 560 L0 287.67Q110.24 325.92, 72 436.16Q70.84 315, 192 313.85Q245.79 247.64, 312 301.44Q392.56 262, 432 342.55Q474.58 313.13, 504 355.71Q609.81 341.51, 624 447.32Q668.24 419.56, 696 463.79Q711.94 407.73, 768 423.67Q757.84 341.51, 840 331.35Q858.27 277.63, 912 295.9Q994.83 258.73, 1032 341.55Q1063.48 253.03, 1152 284.51Q1196.68 257.19, 1224 301.87Q1304.48 310.35, 1296 390.83Q1389.77 364.6, 1416 458.36Q1435.77 358.13, 1536 377.89z" fill="#182f5d"></path>
					<path d="M1464 560L0 560 L0 513.75Q28.32 422.07, 120 450.39Q188.81 399.2, 240 468.01Q306.42 462.43, 312 528.84Q359.34 456.18, 432 503.53Q522.97 474.5, 552 565.46Q600.34 541.8, 624 590.14Q668.75 562.88, 696 607.63Q710.41 502.04, 816 516.45Q866.33 446.78, 936 497.11Q968.12 409.23, 1056 441.34Q1124.79 390.13, 1176 458.92Q1226.03 436.95, 1248 486.98Q1341.28 508.26, 1320 601.54Q1274.4 483.94, 1392 438.35Q1501.98 476.33, 1464 586.31z" fill="rgba(255, 255, 255, 1)"></path>
				</g>
				<defs>
					<mask id="SvgjsMask1000">
						<rect width="1440" height="560" fill="#ffffff"></rect>
					</mask>
				</defs>
			</svg> */}


			{/* 
			</div> */}
		</div >
	)
}

export default Landing;