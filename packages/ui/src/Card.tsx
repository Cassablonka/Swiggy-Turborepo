export const Card = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4">
          <div className="p-3 border-2 border-gray-100 rounded-xl hover:shadow-xl">
            <img
              className="object-cover object-center w-full mb-2.5 lg:h-48 md:h-36 rounded-lg"
              src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/bdcd233971b7c81bf77e1fa4471280eb"
              alt="blog"
            />
            <hr className="mb-2" />
            <div className="inline-flex justify-between w-full">
              <h1 className="text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                Short headline.
              </h1>
              <span className="bg-green-700 text-white px-1 rounded-md">
                4.1⭑
              </span>
            </div>
            <div className="inline-flex justify-between w-full">
              <p className="text-sm text-gray-500">North Indian, Pizzas</p>
              <span className="text-sm text-gray-500">250 for two</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
