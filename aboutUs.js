import React from "react";
import ContactForm from "./ContactForm";

function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p>
          Welcome to <strong>ZoomRide</strong>, your trusted car rental service! The idea for ZoomRide came to life during a road trip among friends. Our founder, Alex Carter, saw how difficult it was to find reliable and affordable car rental options. Determined to change that, Alex launched ZoomRide with a vision to make renting a car as easy as ordering a coffee.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          Our mission is to provide seamless and transparent car rental services for everyone. We offer a wide range of vehicles, from bikes and hatchbacks to SUVs and family-friendly minivans. With affordable pricing and 24/7 customer support, ZoomRide is here to help you get on the road, your way.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Core Values</h2>
        <ul className="list-disc pl-5">
          <li>Customer First: Your satisfaction is our top priority.</li>
          <li>Sustainability: We’re committed to reducing our carbon footprint with eco-friendly options.</li>
          <li>Innovation: We constantly evolve to offer the best experience possible.</li>
        </ul>
      </section>

      {/* Contact Form Component */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default AboutUs;
