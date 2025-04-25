import React, { useState } from 'react';

export const EmailForm = () => {
  const [product, setProduct] = useState('');
  const [segment, setSegment] = useState('');
  const [email, setEmail] = useState('');

  const handleGenerate = async () => {
    setEmail(`Sample email for ${product} to ${segment} segment.`);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Generate Email</h2>
      <input
        type="text"
        placeholder="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Customer Segment"
        value={segment}
        onChange={(e) => setSegment(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleGenerate} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate
      </button>
      <textarea
        value={email}
        readOnly
        className="border p-2 w-full mt-2 h-40"
        placeholder="Generated email will appear here..."
      />
    </div>
  );
};
