"use client";

import { Button, buttonVariants } from "@/components/ui/button";
// import {
//   Button
//   // , Card
// } from "@relume_io/relume-ui";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { RxChevronRight } from "react-icons/rx";

export function Offerings({
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
  
  const t = useTranslations('Home');

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{t('services')}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {t('offerings.title')}
          </h1>
          <p className="md:text-md">
            {t('offerings.description')}
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {
            data.ourOfferings.map((offering) => (
              // <div key={offering.id}>
              //   <h2>{offering.heading}</h2>
              //   <p>{offering.description}</p>
              //   {offering.icon && <img src={"http://localhost:1337" + offering.icon.url} alt={offering.title} />}
              //   {offering.cta && <a href={offering.cta.url}>{offering.cta.label}</a>}
              // </div>
              <Card key={offering.id} className="flex flex-col justify-center p-6 md:p-8">
                <div>
                  <div className="rb-5 mb-5 md:mb-6">
                    <Image
                      src={"http://localhost:1337" + offering.icon.url}
                      className="max-w-12 max-h-12"
                      alt={offering.icon.alternativeText || offering.heading}
                      width={offering.icon.width}
                      height={offering.icon.height}
                    />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {offering.heading}
                  </h2>
                  <p>{offering.description}</p>
                </div>
                <div className="mt-5 md:mt-6">
                  <Link
                    title={offering.cta.label}
                    href={offering.cta.url}
                    className={buttonVariants({ variant: 'link', size: 'sm' })}
                    // iconRight={<RxChevronRight />}
                  >
                    {offering.cta.label}
                  </Link>
                </div>
              </Card>
            ))
          }
          {/* <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="w-12 max-w-[20px]"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Leasing Services Tailored for You
              </h2>
              <p>Flexible long-term operational leases available.</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Learn More"
                variant="link"
                size="link"
                // iconRight={<RxChevronRight />}
              >
                Learn More
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Short-Term Fleet Rentals
              </h2>
              <p>Convenient rentals for all your needs.</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Learn More"
                variant="link"
                size="link"
                // iconRight={<RxChevronRight />}
              >
                Learn More
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Why Choose Us?
              </h2>
              <p>Reliable service with customer satisfaction guaranteed.</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Get Started"
                variant="link"
                size="link"
                // iconRight={<RxChevronRight />}
              >
                Get Started
              </Button>
            </div>
          </Card> */}
        </div>
      </div>
    </section>
  );
}
