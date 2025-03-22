import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import './Contact.css'
import ContactComponent from "../../Components/ContactComponent/ContactComponent";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />

      <div className="hero-section">
      <h1>GCA Contact</h1>
      <p>Manage your global finances effortlessly with multi-currency accounts.</p>
    </div>

    <ContactComponent />
      <Footer />
    </div>
  );
};

export default ContactPage;