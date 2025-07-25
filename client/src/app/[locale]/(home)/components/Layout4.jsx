"use client";

import { Button } from "@/components/ui/button";
// import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Flexibility</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Experience Unmatched Convenience with Fleet Rentals
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Our fleet rentals offer you the freedom to choose from a wide
              variety of vehicles tailored to your needs. Enjoy hassle-free
              access to top-quality vehicles without the long-term commitment.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Wide Selection
                </h6>
                <p>
                  Choose from a diverse range of vehicles to suit every
                  occasion.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Flexible Terms
                </h6>
                <p>
                  Enjoy customizable rental periods that fit your schedule and
                  budget perfectly.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
