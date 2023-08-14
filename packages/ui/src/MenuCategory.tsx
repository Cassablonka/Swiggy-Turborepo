import MenuCard from "./MenuCard";

const MenuCategory = ({
  index,
  activeIndex,
  itemCards,
  title,
  onItemClick,
}: any) => {
  const isActive = index === activeIndex;

  return (
    <div className="shadow-md">
      <div className="px-28 flex flex-wrap md:flex rounded-2xl">
        <div className="flex justify-between py-14 flex-col flex-shrink-0 md:w-64 md:mb-0">
          <button
            type="button"
            className="flex"
            onClick={() => onItemClick(index)}
          >
            <div className="flex text-3xl font-light leading-none text-left text-thin lg:text-4xl">
              <svg
                className="mt-1 mr-4 w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    !isActive
                      ? "m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                      : "M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                  }
                />
              </svg>
              {title} {`(${itemCards.length})`}
            </div>
          </button>
        </div>
        <div className="block ml-8 mt-6">
          {itemCards?.map((d: any) => {
            if (isActive) {
              return <MenuCard key={d?.card?.info?.id} {...d?.card?.info} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
