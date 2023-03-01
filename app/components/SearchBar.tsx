'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  return (
    <div className="flex justify-center m-auto text-left text-lg py-3">
      <input
        type="text"
        className="w-[450px] mr-3 p-2 rounded"
        placeholder="State, city or town"
        value={ location }
        onChange={e => setLocation(e.target.value)}
      />
      <button
        className="bg-red-600 text-white px-9 py-2 rounded"
        onClick={() => {
          if (location === 'banana') return;
          router.push('/search');
        }}
      >
        Let's go
      </button>
    </div>
  );
}
