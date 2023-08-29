import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Freequently.css';
function BasicExample() {
  return (
  <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7">
    <Accordion defaultActiveKey="3">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ color: '#626262', fontSize: '1rem'}}>Is Better Life Carolinas A Hormone Clinic?</Accordion.Header>
        <Accordion.Body style={{ color: '#626262', fontSize: '1rem', lineHeight: '1.7em'}}>
        We Are Not A Hormone Clinic Catering To The Masses Like An Assembly Line. There Is No “One Size Fits All.” We Take The Time To Learn About Each Patient As A Person Focusing On Individual Needs And Goals.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{ color: '#626262', fontSize: '1rem'}}>What Makes Better Life Carolinas Different?</Accordion.Header>
        <Accordion.Body style={{ color: '#626262', fontSize: '1rem', lineHeight: '1.7em'}}>
        We Continuously Invest Our Time And Resources Into Providing Our Patients The Most Scientifically Advanced Treatments Available, Such As Regenerative Stem Cell Therapies, GAINSWave™, Viveve™ And The Emsella™ Chair.
        </Accordion.Body>
      </Accordion.Item>
<Accordion.Item eventKey="2">
        <Accordion.Header style={{ color: '#626262', fontSize: '1rem'}}>Do I Have To Pay For The Initial Patient Consultation?</Accordion.Header>
        <Accordion.Body style={{ color: '#626262', fontSize: '1rem', lineHeight: '1.7em'}}>
        Don't Be Overwhelmed By Trying To Decide What You May Or May Not Need. All Patient Consultations Are Free And Can Be Handled By Phone For Your Convenience. Our Patient Counselor Will Work With You To Help You Determine The Best Course Of Action For Your Specific Health Needs.
        </Accordion.Body>
      </Accordion.Item>
<Accordion.Item eventKey="3">
        <Accordion.Header style={{ color: '#626262', fontSize: '1rem'}}>Does Better Life Offer Specialty Testing?</Accordion.Header>
        <Accordion.Body style={{ color: '#626262', fontSize: '1rem', lineHeight: '1.7em'}}>
        BETTER LIFE OFFERS A COMPLETE MENU OF SPECIALTY TESTS, FROM GENETIC TESTING TO FOOD SENSITIVITY TO CANCER SCREENING.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    

    </div>
    </div>
    </div>

  );
}

export default BasicExample;
