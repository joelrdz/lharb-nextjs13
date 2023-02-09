export default function NavBar() {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <a href="" className="text-gray-700 text-2xl font-bold">OpenTable</a>
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
