import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="text-gray-700 text-2xl font-bold">
        OpenTable
      </Link>
      <div>
        <div className="flex">
          <button className="p-1 px-4 border rounded bg-blue-400 text-white mr-3">
            Sign in
          </button>
          <button className="p-1 px-4 border rounded">Sign up</button>
        </div>
      </div>
    </nav>
  );
}
