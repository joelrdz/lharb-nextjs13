import NavBar from '../../../components/NavBar';
import Header from '../components/Header';
import RestaurantNavBar from '../components/RestaurantNavBar';

export default function RestaurantMenu() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBar />
            {/* MENU */}
            <main className="bg-white mt-5">
              <div>
                <div className="mt-4 mb-1 pb-1">
                  <h1 className="text-4xl font-bold">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {/* MENU CARD */}
                  <div className="border rounded p-3 w-[49%] mb-3">
                    <h3 className="font-bold text-lg">Surf and Turf</h3>
                    <p className="font-light mt-1 text-sm">A well done steak with lobster and rice</p>
                    <p className="mt-7">$80.00</p>
                  </div>
                  {/* MENU CARD */}
                </div>
              </div>
            </main>
            {/* MENU */}
          </div>
        </div>
      </main>
    </main>
  );
}
