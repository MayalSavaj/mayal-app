import React from 'react';
import '../componetn/Nav.css'
import logo from '../photo/logo.png';



function nav() {
	return (
		<header>
			<div className="main">
			<img src={logo} />
			</div>
			<div className="main-row">
				<div className="img1">
					<h1>+</h1>
					<p>NEW</p>
				</div>
				<div className="img2">
				<h6>
					PATIENT
				</h6>
				
				</div>
				<div className="img3">
                 <h6>
					FOLDER
				 </h6>
				</div>
				<div className="img4">
					<h6>
						UPLOAD
					</h6>
				</div>
				<div className="img5">
					<h6>
						REPORT
					</h6>
				</div>
				<div className="img6">
					<h6>
						SETTING
					</h6>
				</div>
				<div className="img7">
					<h6>LOGOUT</h6>
				</div>
				<div className="img8"></div>
			</div>
			
		</header>
	)
}

export default nav;