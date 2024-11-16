import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 bg-blend-color-burn">
      <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b backdrop-blur-sm"></div>
      </div>

      <main className="relative z-10 flex items-center">
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:py-8 lg:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="mt-12 space-y-8">
              <h1 className="text-4xl font-bold text-white md:text-7xl">
                Welcome to
                <span className="block text-amber-400 sm:text-3xl">
                  samarasa coffee shop
                </span>
              </h1>

              <p className="text-xl text-gray-300">
                Delivering great coffee for more than 8 years! Come to our shop
                for an unforgettable experience.
              </p>

              <Link href="/product" className="flex space-x-6">
                <div className="flex space-x-6">
                  <button className="transform rounded-lg bg-amber-500 px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-amber-400">
                    Order Now
                  </button>
                  <button className="rounded-lg border-2 border-amber-400 px-8 py-4 font-semibold text-amber-400 transition-all duration-300 hover:bg-amber-400/10">
                    View Menu
                  </button>
                </div>
              </Link>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-amber-400">8+</div>
                  <div className="text-gray-400">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400">100+</div>
                  <div className="text-gray-400">Daily Customers</div>
                </div>
              </div>
            </div>

            <div className="relative mt-12 hidden md:block">
              <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                <img
                  src="/look-restaurant.jpg"
                  alt="coffee shop interior"
                  className="h-auto w-full transform rounded-2xl transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute bottom-8 left-1/2 w-max -translate-x-1/2 transform rounded-xl border border-gray-800 bg-gray-900/80 p-4 backdrop-blur-md">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/20">
                      <svg
                        className="h-6 w-6 text-amber-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Special Offer</div>
                      <div className="font-semibold text-white">
                        10% Off First Visit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
