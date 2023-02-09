export default function RestaurantCard() {
  return (
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
  );
}
