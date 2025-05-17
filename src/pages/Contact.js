
import React from 'react';

const Contact = () => (
  <section>
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <p className="mb-4">Need help or have questions? Reach out to us!</p>
    <form className="space-y-4 max-w-md mx-auto">
      <input type="text" placeholder="Your Name" className="border p-2 w-full" />
      <input type="email" placeholder="Your Email" className="border p-2 w-full" />
      <textarea placeholder="Your Message" className="border p-2 w-full" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
    </form>
  </section>
);
export default Contact;
