import Header from './components/Header';
import NavBar from './components/NavBar';
import RestaurantCard from './components/RestaurantCard';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="bg-white max-w-screen-2xl m-auto">
        <NavBar />
        <main>
          <Header />
          {/* CARDS */}
          <div className="flex flex-wrap py-3 px-36 mt-10">
            <RestaurantCard />
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
