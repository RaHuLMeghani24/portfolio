import React from "react";
// import resume from '../utility/RahulJMeghani_coop.pdf';
// import {Document, Page, pdfjs} from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Rahul's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                {/* <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a> */}
                {/* <Document file={resume}
                          onLoadError={console.error}
                          style={{width:'100w', height:'auto'}}
                >
                  <Page pageIndex={0}></Page>
                </Document> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
