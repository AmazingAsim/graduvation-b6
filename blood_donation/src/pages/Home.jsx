import React from 'react'
import Carousel from '../components/Carousel'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();
  return (
    <div>
       <Carousel/>

        {/* Hero Section */}
<section className="hero-section text-center pt-3  text-danger">
  <div className="container">
    <h1 className="display-4 fw-bold mb-4">Donate Blood, Save Lives</h1>
    <p className="lead mb-2">
      Your single donation can save up to <span className="fw-bold">three lives</span>.
    </p>
  </div>
</section>

{/* Stats Section */}
<section className="py-5 bg-light">
  <div className="container text-center">
    <div className="row g-4">
      <div className="col-md-4">
        <div className="stat-card p-4 bg-danger text-light h-100">
          <h2 className="text-white">1,245+</h2>
          <p className="mb-0">Lives Saved This Month</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="stat-card p-4 bg-danger text-light h-100">
          <h2 className="text-white">5,678</h2>
          <p className="mb-0">Active Donors</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="stat-card p-4 bg-danger text-light h-100">
          <h2 className="text-white">42</h2>
          <p className="mb-0">Upcoming Blood Drives</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Why Donate Section */}
<section className="py-5">
  <div className="container">
    <h2 className="text-center mb-5">Why Donate Blood?</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="text-center p-4">
          <div className="blood-icon mb-3">
            <i className="fas fa-ambulance fa-3x text-danger"></i>
          </div>
          <h4>Emergency Needs</h4>
          <p>Accidents, surgeries, and medical treatments require blood.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="text-center p-4">
          <div className="blood-icon mb-3">
            <i className="fas fa-hospital-user fa-3x text-danger"></i>
          </div>
          <h4>Chronic Illnesses</h4>
          <p>Patients with cancer or anemia depend on donors.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="text-center p-4">
          <div className="blood-icon mb-3">
            <i className="fas fa-hands-helping fa-3x text-danger"></i>
          </div>
          <h4>Community Support</h4>
          <p>Your donation ensures blood banks don't run low.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* How to Help Section */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5">How You Can Help</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-center">
            <div className="blood-icon mb-3">
              <i className="fas fa-map-marker-alt fa-3x text-danger"></i>
            </div>
            <h5 className="card-title">Find a Center</h5>
            <p className="card-text">Locate nearby donation centers.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-center">
            <div className="blood-icon mb-3">
              <i className="fas fa-calendar-alt fa-3x text-danger"></i>
            </div>
            <h5 className="card-title">Schedule</h5>
            <p className="card-text">Book your donation appointment.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-center">
            <div className="blood-icon mb-3">
              <i className="fas fa-share-alt fa-3x text-danger"></i>
            </div>
            <h5 className="card-title">Spread Awareness</h5>
            <p className="card-text">Encourage others to donate.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Eligibility Section */}
<section className="py-5">
  <div className="container">
    <div className="row align-items-center text-center">
      <div className="col-lg-6">
        <h2 className="mb-4">Are You Eligible?</h2>
        <ul className="list-unstyled">
          <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> Age 18-65 years</li>
          <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> Weight at least 50kg</li>
          <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> Generally healthy</li>
        </ul>
        <button className="btn btn-outline-danger mt-3" onClick={() => navigate('eligibility')}>Check Full Requirements</button>
      </div>
      <div className="col-lg-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qHu9evjsSluw9BoDkhkCh6U2rDt-Fn-cvg&s" alt="Donation process" className="img-fluid rounded" />
      </div>
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5">Donor Stories</h2>
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="testimonial-card p-4 h-100">
          
          <p>"I've donated 15 times and knowing I've helped save lives is incredible."</p>
          <div className="d-flex align-items-center">
            <div className="ms-3">
              <h6 className="mb-0">Sarah K.</h6>
              <small className="text-muted">Regular Donor</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="testimonial-card p-4 h-100">
   
          <p>"After receiving blood myself, I became a donor to give back."</p>
          <div className="d-flex align-items-center">
            <div className="ms-3">
              <h6 className="mb-0">Michael T.</h6>
              <small className="text-muted">Recipient & Donor</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-5 bg-danger text-white">
  <div className="container text-center">
    <h2 className="mb-4">Ready to Make a Difference?</h2>
    <p className="lead mb-5">Join thousands of lifesavers in your community today</p>
    <button onClick={()=>{navigate('donate')}} className="btn btn-light btn-lg px-5 me-3">Donate Now</button>
    <button onClick={()=>{navigate('about')}} className="btn btn-outline-light btn-lg px-5">Learn More</button>
  </div>
</section>
      
    </div>
  )
}
