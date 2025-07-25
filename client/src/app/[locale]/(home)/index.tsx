import React from "react";
import { Hero } from "./components/Hero";
import { Offerings } from "./components/Offerings";
import { Layout213 } from "./components/Layout213";
import { Layout254 } from "./components/Layout254";
import { Layout4 } from "./components/Layout4";
import { Gallery8 } from "./components/Gallery8";
import { Layout2 } from "./components/Layout2";
import { Testimonial18 } from "./components/Testimonial18";
import { Logo3 } from "./components/Logo3";
import { Footer7 } from "./components/Footer7";

export default function Page({
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
    <div>
      
      <Hero data={data} />
      <Offerings data={data} />
      {/* <Layout396 />
      <Layout213 />
      <Layout254 />
      <Layout4 />
      <Gallery8 />
      <Layout2 />
      <Testimonial18 />
      <Logo3 />
      <Footer7 /> */}
    </div>
  );
}
