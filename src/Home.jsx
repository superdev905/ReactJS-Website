import React from "react";
import web from "./images/logo.png"
import xyz from "./images/brands/adobe.svg"

import BusinessIcon from '@material-ui/icons/Business';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall';

const Home = () => {
	return (
		<>
			<section className="sec_1"> 
				<div className="header_height sec_bg d-flex align-items-center">
					<div className="container">
					<div className="col-12 col-md-9 col-lg-6 py-5">
						<h1 className="hdrcolor">We create efficient digital solutions engineered for growth</h1>
						<p className="text-white lead">Lorem Ipsum is simply dummy text of the printing industry.</p>
						<button className="btn btn-lg col-lg-4 col-6 btn_custom btn_shadow">LET'S TALK</button>
					</div>
					</div>
				</div>
			</section>




<section> 
			<div className="container mx-auto py-5">
					<div className="mb-5 text-center">
						<p className="display-6 mb-1">What we do...</p>
						<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div><br/>
					<div className="row d-flex align-items-center justify-content-evenly mt-1">
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><BusinessIcon /></div>
								<p className="mb-2 mt-4">Brand Building</p>
								<p className="text-muted text-left text-xl-center text-lg-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><PhotoSizeSelectSmallIcon /></div>
								<p className="mb-2 mt-4">Pixel Perfect Designing</p>
								<p className="text-muted text-left text-xl-center text-lg-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 text-center">
							<div className="box_border position-relative rounded pt-5 pb-3 px-3">
								<div className="shp"><AttachMoneyIcon /></div>
								<p className="mb-2 mt-4">Marketing</p>
								<p className="text-muted text-left text-xl-center text-lg-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
						</div>
					</div>
			</div>
			</section>



			<section className="sec_2"> 
				<div className="sec_bg py-5">
					<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12 col-md-9 col-lg-6 py-5 text-center">
						<p className="display-6 mb-1 text-white">Our Brand Partner</p>
						<img className="image-fluid" width="40%" src={web} />
						<p className="text-white lead">Lorem Ipsum is simply dummy text of the printing industry.</p>
					</div>
					</div>
				</div>
			</section>

			


			


			<section> 
			<div className="container mx-auto py-5">
					<div className="mb-5 text-center">
						<p className="display-6 mb-1">Our Products</p>
						<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="row d-flex align-items-center justify-content-evenly">
						<div className="col-md-3 text-center">
							<div class="snip1534">
							  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample17.jpg" alt="pr-sample17" />
							  <div className="img_caption">
							    <h4>Sir Cumference</h4>
							    <h5>Design</h5>
							  </div>
							</div>
						</div>
						<div className="col-md-3 text-center">
							<div class="snip1534">
							  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample17.jpg" alt="pr-sample17" />
							  <div className="img_caption">
							    <h4>Sir Cumference</h4>
							    <h5>Design</h5>
							  </div>
							</div>
						</div>
						<div className="col-md-3 text-center">
							<div class="snip1534">
							  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample17.jpg" alt="pr-sample17" />
							  <div className="img_caption">
							    <h4>Sir Cumference</h4>
							    <h5>Design</h5>
							  </div>
							</div>
						</div>
					</div>
			</div>
			</section>







<section className="bg-light"> 
			<div className="container mx-auto py-5">
					<div className="mb-5 text-center">
						<p className="display-6 mb-1">We Worked With...</p>
						<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="row gy-2 brands_logo d-flex align-items-center justify-content-evenly mx-3">
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<img className="img-fluid" src={xyz} />
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<img className="img-fluid" src={xyz} />
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<img className="img-fluid" src={xyz} />
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<img className="img-fluid" src={xyz} />
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<img className="img-fluid" src={xyz} />
						</div>
						<div className="col-md-3 col-4 col-lg-4 text-center">
							<img className="img-fluid" src={xyz} />
						</div>
					</div>
			</div>
			</section>



			<section> 
				<div className="py-5">
					<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12 col-md-9 col-lg-6 py-5 text-center">
						<p className="display-6 mb-1">Work with an elite team of thinkers.</p>
						<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<button className="btn p-2 btn_custom col-lg-3 col-md-5 col-6">LET'S TALK</button>
					</div>
					</div>
				</div>
			</section>





			

		</>

	);
};

export default Home;