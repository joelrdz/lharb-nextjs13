import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-wrap py-3 px-36 mt-10">
        <RestaurantCard />
      </div>
    </main>
  );
}
