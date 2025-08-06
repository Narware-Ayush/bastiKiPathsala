// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p className="text-sm">
            Basti Ki Pathshala is a volunteer-based NGO dedicated to providing free and inclusive education to children in
            underserved communities. We believe education is a right, not a privilege.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/volunteer" className="hover:underline">volunteer</a></li>
            
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: contact@bastikipathshala.org</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <p className="text-sm">Location: New Delhi, India</p>
        </div>
      </div>

      <div className="text-center py-4 text-sm bg-green-800">
        &copy; {new Date().getFullYear()} Basti Ki Pathshala Foundation. All rights reserved.
      </div>
    </footer>
  );
}

