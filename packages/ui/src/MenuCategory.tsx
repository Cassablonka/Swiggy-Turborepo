import { useState } from "react";
import MenuCard from "./MenuCard";

const MenuCategory = ({itemCards, title}:any) => {
    const [showItems, setShowItems] = useState(false)
  return (
    <div className="border-t-2 border-gray-200">
    <div className="px-20 flex flex-wrap md:flex rounded-2xl">
    <div className="flex justify-between py-14 flex-col flex-shrink-0 px-10 md:w-64 md:mb-0">
      <button type="button" className="flex" onClick={() => setShowItems(!showItems)}>
        <div className="flex text-3xl font-light leading-none text-left text-thin lg:text-4xl">
        {!showItems ? 
            <svg className="mt-1 mr-4 w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
            </svg> :
        <svg className="mt-1 mr-4 w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
        </svg>
        } 
        {title} {`(${itemCards.length})`}
        </div>
    </button>
    </div>
    <div className="block ml-8 mt-6">
      {itemCards?.map((d: any) => {
        if (showItems) {
            return <MenuCard key={d?.card?.info?.id} {...d?.card?.info} />
        }
    })}
    </div>
  </div>
  </div>
  )
}

export default MenuCategory
