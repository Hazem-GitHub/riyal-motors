import { getStrapiURL } from "@/utils/get-strapi-url";
import { fetchAPI } from "@/utils/fetch-api";

// const BLOG_PAGE_SIZE = 3;
const BASE_URL = getStrapiURL();

export async function getHomePage(locale: string = "en") {
  const path = "/api/home-page?locale=" + locale + "&populate[ourOfferings][populate][0]=icon&populate[ourOfferings][populate][1]=cta&populate[hero][populate][2]=cta1&populate[hero][populate][3]=cta2";
  const url = new URL(path, BASE_URL);
  return fetchAPI(url.href, { method: "GET" });
}

export async function getNavbar(locale: string = "en") {
  const path = "/api/navbar?locale=" + locale + "&populate=*"
  const url = new URL(path, BASE_URL);
  return fetchAPI(url.href, { method: "GET" });
}