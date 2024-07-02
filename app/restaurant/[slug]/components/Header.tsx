export default function Header({ name }: { name: string }) {
  const renderTitle = () => {
    const nameArray = name.split('-');

    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`

    return nameArray.join(' ');
  };

  return (
    <div className="h-96 overflow-hidden">
      <div className="h-full bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex justify-center items-center">
        <h1 className="text-7xl text-white text-center text-shadow capitalize">
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
}
