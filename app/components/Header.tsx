'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  return (
    <div className="h-64 p-2 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">Find your table for any occasion</h1>
        {/* SEARCH BAR */}
        <div className="flex justify-center m-auto text-left text-lg py-3">
          <input
            type="text"
            className="w-[450px] mr-3 p-2 rounded"
            placeholder="State, city or town"
            value={ location }
            onChange={e => setLocation(e.target.value)}
          />
          <button className="bg-red-600 text-white px-9 py-2 rounded" onClick={() => {
            if (location === 'banana') return;
            router.push('/search');
          }}>
            Let's go
          </button>
        </div>
        {/* SEARCH BAR */}
      </div>
    </div>
  );
}
