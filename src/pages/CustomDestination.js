
import React from 'react';

const CustomDestination = () => (
  <section>
    <h2 className="text-3xl font-bold mb-4">Custom Destination</h2>
    <p className="mb-4">Plan your unique adventure with our flexible itinerary builder.</p>
    <form className="space-y-4 max-w-md mx-auto">
      <input type="text" placeholder="Destination Name" className="border p-2 w-full" />
      <textarea placeholder="Describe your plan" className="border p-2 w-full" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  </section>
);
export default CustomDestination;
