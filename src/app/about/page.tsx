import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 bg-blend-color-burn">
      <div className="bg-center0 absolute inset-0 bg-cover">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b backdrop-blur-sm"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="mt-20 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-3xl font-bold text-transparent md:text-6xl">
              About Samarasa Coffee Shop!
            </h1>
            <div className="h-1 w-24 rounded-full bg-amber-400"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <p className="text-l leading-relaxed text-gray-300 lg:text-xl">
                Here, we serve not only coffee, but also stories in every cup.
                Starting from our love for local coffee beans, samarasa is here
                to bring you the best coffee drinking experience, straight from
                the farmer to your table.
              </p>
              <p className="text-l leading-relaxed text-gray-300 lg:text-xl">
                We believe that coffee is an art. Every bean we carefully select
                is professionally processed to ensure authentic aroma and taste.
                Our shop is a place where you can relax, share stories, or just
                enjoy a quiet moment with your favorite cup of coffee.
              </p>
            </div>

            <div className="relative hidden md:block">
              <div className="relative h-full rounded-2xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-lg text-gray-300">
                      Why We're Different?
                    </span>
                  </div>
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
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-300">
                      Quality Local Coffee:
                      <p>
                        All our coffee beans come from the best local farmers
                      </p>
                    </span>
                  </div>
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
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-300">
                      Process with Love:
                      <p>
                        From roasting to serving, every step is done with care.
                      </p>
                    </span>
                  </div>
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
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-300">
                      Comfortable Atmosphere:
                      <p>
                        Designed to be your favorite place to work or just
                        relax.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
