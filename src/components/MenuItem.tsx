import React from "react";

type MenuItemProps = {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  rating: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ imageSrc, title, description, price, rating }) => (
  <article className="flex flex-col px-5 py-10 mx-auto w-full font-bold bg-yellow-50 shadow-xl rounded-[41px] max-md:pr-5 max-md:mt-10">
    <img loading="lazy" src={imageSrc} alt={`${title} image`} className="self-center max-w-full aspect-[1.03] w-[163px]" />
    <h3 className="mt-7 text-2xl text-neutral-800">{title}</h3>
    <p className="mt-2 text-sm text-neutral-600">{description}</p>
    <div className="flex gap-5 justify-between px-0.5 mt-6 text-2xl text-stone-600">
      <div>
        <span className="text-lg">$</span>
        <span className="text-xl text-stone-600">{price}</span>
      </div>
      <img loading="lazy" src={rating} alt="Rating" className="shrink-0 self-start aspect-[6.67] w-[97px]" />
    </div>
  </article>
);

export default MenuItem;
