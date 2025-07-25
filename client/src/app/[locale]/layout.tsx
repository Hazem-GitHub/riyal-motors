import { getNavbar } from "@/data/loaders";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/Navbar";

async function loader(locale: string) {
  const data = await getNavbar(locale);
  return data?.data?.navItems;
}


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = (await params).locale;
  const messages = await getMessages();
  const navbar = await loader(locale);
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="scroll-smooth">
      <body
        className={` antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="mx-auto h-screen max-w-[100rem]">
            <Navbar data={navbar} />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
