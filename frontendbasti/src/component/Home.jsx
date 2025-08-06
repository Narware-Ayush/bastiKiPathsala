// src/components/Home.js
import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-24 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Empowering Lives Through Education</h1>
        <p className="max-w-3xl mx-auto text-xl">
          Join us in our mission to uplift underprivileged communities through free education and grassroots support.
        </p>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Basti Ki Pathshala is a non-profit organization that believes education is the key to breaking the cycle of poverty.
          We operate informal schools in slum areas and provide resources, mentorship, and support to children who otherwise have no access to learning.
        </p>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-green-600">500+</h3>
            <p className="text-gray-600">Children Educated</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">100+</h3>
            <p className="text-gray-600">Volunteers Engaged</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">20+</h3>
            <p className="text-gray-600">Learning Centers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">50+</h3>
            <p className="text-gray-600">Workshops Conducted</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Our Programs</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-gray-100 p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Free Classes</h3>
            <p className="text-gray-700">Daily sessions for children covering basic education, moral values, and soft skills.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Health & Nutrition</h3>
            <p className="text-gray-700">We conduct regular health checkups and distribute meals and hygiene kits to children.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Community Awareness</h3>
            <p className="text-gray-700">We organize events and campaigns to raise awareness about education, health, and gender equality.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded shadow">
            <p className="italic">"Volunteering here has been the most fulfilling experience of my life. Seeing children smile when they learn something new is priceless."</p>
            <p className="mt-4 font-semibold">— Anjali, Volunteer</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="italic">"Thanks to this initiative, my daughter now dreams of becoming a doctor. I never thought education could be so close to our basti."</p>
            <p className="mt-4 font-semibold">— Ramesh, Parent</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">You Can Make a Difference</h2>
        <p className="text-lg mb-6">Join our mission to bring education, dignity, and opportunity to every child.</p>
        <button className="bg-white text-green-700 px-6 py-3 rounded hover:bg-gray-100 text-lg font-semibold">
          Become a Volunteer
        </button>
      </section>
    </div>
  );
}
