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
              About Samarasa: Where Coffee Meets Culture!
            </h1>
            <div className="h-1 w-24 rounded-full bg-amber-400"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <p className="text-l leading-relaxed text-gray-300 lg:text-xl">
                At Samarasa, we believe that coffee is more than a beverage -
                it's a bridge to stories, a connection to our roots, and an
                expression of art. Our journey began with a deep love for local
                coffee beans and a mission to celebrate Indonesia's rich coffee
                heritage. Since our founding in 2016, we have partnered with
                farmers across the archipelago, ensuring each cup you enjoy
                supports sustainable practices and fair trade.
              </p>
              <p className="text-l leading-relaxed text-gray-300 lg:text-xl">
                From a humble beginning as a small café in Depok, Samarasa has
                grown into a community hub cherished by coffee enthusiasts. Over
                the years, we've celebrated key milestones - such as launching
                our signature blend, collaborating with local artists, and
                expanding our reach while staying true to our artisanal roots.
              </p>
            </div>

            <div className="relative hidden md:block">
              <div className="relative h-full rounded-2xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-lg font-bold text-amber-300 text-transparent">
                      Our Culture and Values
                    </span>
                  </div>
                  <div className="text-font-semibold flex items-center space-x-4 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                    <p className="text-white">
                      At Samarasa, we value authenticity, craftsmanship, and
                      community. These principles guide every aspect of what we
                      do, from sourcing premium beans to creating a warm,
                      welcoming atmosphere for our guests and team members
                      alike.
                      <br />
                      <br />
                      Our team is driven by a passion for innovation and respect
                      for tradition. We foster a collaborative environment where
                      creativity thrives, and everyone contributes to our
                      mission of delivering the finest coffee experience.
                      Whether it's the barista perfecting your latte art or the
                      farmer nurturing the beans, each individual plays a vital
                      role in our story. Join us at Samarasa, where every cup of
                      coffee tells a tale, and every sip feels like home.
                    </p>
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
