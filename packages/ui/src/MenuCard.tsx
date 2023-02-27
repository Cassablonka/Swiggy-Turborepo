const MenuCard = () => {
  return (
    <div className="prose md:flex-grow prose-md">
      <h1 className="my-4 text-3xl font-bold leading-none tracking-tighter text-neutral-600 md:text-6xl lg:text-4xl">
        Sample Dish Name
      </h1>
      <div className="flex flex-col items-center pb-10 mx-auto border-b border-gray-200 max-w-7xl sm:flex-row">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
          <img alt="image" />
        </div>
        <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
          <h2>Dish name</h2>
          <p>What they serve</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
