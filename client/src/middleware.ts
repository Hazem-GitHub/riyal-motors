import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Define the locales supported by your application
  locales: ['en', 'ar'],
  // Optional: Specify the default locale
  defaultLocale: 'en',
});
 
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(ar|en)/:path*',
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!api|_next|.*\\..*).*)'
  ],
}