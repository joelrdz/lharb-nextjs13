import { PrismaClient } from '@prisma/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';

const prisma = new PrismaClient();

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
    }
  });

  return restaurants;
}

export default async function Home() {
  const restaurants = await fetchRestaurants();

  console.log({ restaurants });
  return (
    <main>
      <Header />
      <div className="flex flex-wrap py-3 px-36 mt-10">
        {restaurants.map(() => (
          <RestaurantCard />
        ))}
      </div>
    </main>
  );
}
