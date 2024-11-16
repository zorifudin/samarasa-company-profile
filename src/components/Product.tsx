"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Americano",
    description:
      "A classic coffee drink made from espresso with the addition of hot water.",
    price: 4.5,
    image: "/americano.jpg",
  },
  {
    id: 2,
    name: "Cappucino",
    description:
      "The perfect combination of espresso, hot milk and soft milk foam.",
    price: 4.9,
    image: "/capucino.jpg",
  },
  {
    id: 3,
    name: "Latte",
    description:
      "Espresso mixed with hot milk produces a smooth taste with a little foam on top.",
    price: 5.0,
    image: "/latte.jpg",
  },
  {
    id: 4,
    name: "Machiatto",
    description: "Espresso with a touch of milk foam on top.",
    price: 4.95,
    image: "/machiato.jpg",
  },
];

const MenuPage = () => {
  const [activeFilter, setActiveFilter] = React.useState("All");

  return (
    <section className="relative min-h-screen bg-gray-900 bg-blend-color-burn">
      <div className="bg-center0 absolute inset-0 bg-cover">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b backdrop-blur-sm"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-3xl font-bold text-transparent md:text-6xl">
              Check Our Tasty Menu
            </h1>
            <div className="h-1 w-24 rounded-full bg-amber-400"></div>
          </div>

          <div className="mb-12 flex justify-center gap-20">
            <Button className="transform rounded-full bg-amber-500 px-6 py-2 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-amber-400">
              <Link href="/product">View All Menu</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center">
                    <h3 className="flex-grow text-lg text-gray-200">
                      {item.name}
                    </h3>
                    <div className="mx-2 flex-grow border-b border-dotted border-gray-600"></div>
                    <span className="text-amber-500">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm italic text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
