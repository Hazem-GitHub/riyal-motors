"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function Hero({
  data
}: {
  data: {
    id: number
    documentId: string
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    description: string
    ourOfferings: {
            id: number
            heading: string
            description: string
            icon: {
                id: number
                documentId: string
                name: string
                alternativeText: string
                caption: string
                width: number
                height: number
                formats: unknown
                hash: string
                ext: string
                mime: string
                size: number
                url: string
                previewUrl: null,
                provider: string
                provider_metadata: null,
                createdAt: string
                updatedAt: string
                publishedAt: string
            }
            cta: {
                id: number
                label: string
                url: string
                isExternal: boolean
            }
        }[]
    hero: {
        id: number
        heading: string
        shortDescription: string
        cta1: {
            id: number
            label: string
            url: string
            isExternal: boolean
        },
        cta2: {
            id: number
            label: string
            url: string
            isExternal: boolean
        }
    }
  }
}) {
  return (
    <section
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-[5%] max-w-[50rem] justify-self-start lg:me-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-8xl">
          {data.hero.heading}
        </h1>
        <p className="md:text-md">
        {data.hero.shortDescription}
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Link className={buttonVariants()} title={data.hero.cta1.label} href={data.hero.cta1.url}>{data.hero.cta1.label}</Link>
          <Link className={buttonVariants({variant: 'secondary'})} title={data.hero.cta2.label} href={data.hero.cta2.url}>{data.hero.cta2.label}</Link>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pe-[5vw] ps-[5vw] md:h-[40rem] lg:h-screen lg:ps-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 4"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 5"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 6"
                />
              </div>
            </div>
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 4"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 5"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
