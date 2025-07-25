"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import {
//   Button,
//   Dialog,
//   DialogContent,
//   DialogTrigger,
//   VideoIframe,
// } from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

export function Layout2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Convenience</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Mobile Service Support for Your Vehicle
            </h1>
            <p className="md:text-md">
              Our mobile service support brings vehicle maintenance directly to
              you, ensuring convenience and efficiency. Experience timely
              service across the Kingdom, minimizing downtime and maximizing
              your driving experience.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Book an Appointment"
                variant="link"
                size="link"
                // iconRight={<RxChevronRight />}
              >
                Book an Appointment
              </Button>
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-image">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                className="w-full object-cover"
                alt="Relume placeholder image"
              />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
              <span className="absolute inset-0 z-10 bg-black/50" />
            </DialogTrigger>
            <DialogContent>
              {/* <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" /> */}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
