"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full border-b border-gray-800/50 bg-gray-900/50 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-xl font-semibold text-amber-400 transition-colors duration-200 hover:text-amber-300 md:text-2xl"
        >
          samarasa
        </Link>

        <div className="hidden items-center space-x-8 lg:flex">
          <Link
            href="/about"
            className="rounded-md px-2 py-1 text-sm font-medium text-gray-200 transition-colors duration-200 hover:bg-amber-400/10 hover:text-amber-400"
          >
            ABOUT
          </Link>
          <Link
            href="/team"
            className="rounded-md px-2 py-1 text-sm font-medium text-gray-200 transition-colors duration-200 hover:bg-amber-400/10 hover:text-amber-400"
          >
            TEAM
          </Link>
          <Link
            href="/product"
            className="rounded-md px-2 py-1 text-sm font-medium text-gray-200 transition-colors duration-200 hover:bg-amber-400/10 hover:text-amber-400"
          >
            PRODUCT
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-2 py-1 text-sm font-medium text-gray-200 transition-colors duration-200 hover:bg-amber-400/10 hover:text-amber-400"
          >
            CONTACT
          </Link>
        </div>

        <div className="hidden sm:block">
          <Button className="transform rounded-full bg-amber-500 px-6 py-2 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-amber-400">
            Order Now
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none lg:hidden" asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 bg-transparent hover:border-gray-600 hover:bg-gray-800/50"
            >
              <Menu className="h-5 w-5 text-gray-200" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 w-56 rounded-lg border border-gray-800 bg-gray-900/95 shadow-lg shadow-black/50 backdrop-blur-lg">
            <DropdownMenuItem className="focus:bg-gray-800/50"></DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-gray-800/50">
              <Link
                href={"/about"}
                className="flex w-full px-3 py-2 text-gray-200 transition-colors duration-200 hover:text-amber-400"
              >
                ABOUT
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-gray-800/50">
              <Link
                href={"/team"}
                className="flex w-full px-3 py-2 text-gray-200 transition-colors duration-200 hover:text-amber-400"
              >
                TEAM
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-gray-800/50">
              <Link
                href={"/product"}
                className="flex w-full px-3 py-2 text-gray-200 transition-colors duration-200 hover:text-amber-400"
              >
                PRODUCT
              </Link>
            </DropdownMenuItem>
            <Link
              href={"/contact"}
              className="flex w-full px-3 py-2 text-gray-200 transition-colors duration-200 hover:text-amber-400"
            >
              CONTACT
            </Link>
            <Link href="/product">
              <DropdownMenuItem className="focus:bg-gray-800/50 sm:hidden">
                <Button className="mt-2 w-full rounded-full bg-amber-500 font-semibold text-gray-900 transition-all duration-300 hover:bg-amber-400">
                  Order Now
                </Button>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
