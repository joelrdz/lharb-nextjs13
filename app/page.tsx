export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="bg-white max-w-screen-2xl m-auto">
        {/* NAVBAR */}
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
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <div className="h-64 p-2 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">Find your table for any occasion</h1>
              {/* SEARCH BAR */}
              <div className="flex justify-center m-auto text-left text-lg py-3">
                <input
                  type="text"
                  className="w-[450px] mr-3 p-2 rounded"
                  placeholder="State, city or town"
                />
                <button className="bg-red-600 text-white px-9 py-2 rounded">Let's go</button>
              </div>
              {/* SEARCH BAR */}
            </div>
          </div>
          {/* HEADER */}
          {/* CARDS */}
          <div className="flex flex-wrap py-3 px-36 mt-10">
            {/* CARD */}
            <div className="w-64 h-72 m-3 overflow-hidden border rounded cursor-pointer">
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-medium/3/42423704.png"
                alt=""
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="text-2xl font-bold mb-2">Milestones Grill</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className="mr-3">Mexican</p>
                  <p className="mr-3">$$$$</p>
                  <p>Toronto</p>
                </div>
                <p className="text-sm font-bold mt-1">Booked 3 times today</p>
              </div>
            </div>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
