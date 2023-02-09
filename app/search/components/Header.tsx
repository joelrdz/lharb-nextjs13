export default function Header() {
  return (
    <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="flex justify-center m-auto text-left text-lg py-3">
        <input
          type="text"
          className="w-[450px] mr-3 p-2 rounded"
          placeholder="State, city or town"
        />
        <button className="bg-red-600 text-white px-9 py-2 rounded">Let's go</button>
      </div>
    </div>
  );
}
