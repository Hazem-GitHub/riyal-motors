import LangSwitcher from "@/components/LangSwitcher";
import { getHomePage } from "@/data/loaders";
// import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Page from "./(home)/index"

// Page metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const messages = await getMessages({ locale });
  const title = messages.Home.title;

  return {
    title,
  }

}

async function loader(locale: string) {
  const data = await getHomePage(locale);
  if (!data) notFound();
  console.log(data);
  return { ...data.data };
}


export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
  }) {
  const locale = (await params).locale;
  // const t = useTranslations('Home');
  const data = await loader(locale);
  console.log(data);

  return (
    <>
      {/* <h1>{t('title')}</h1> */}
      {/* <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div className="flex gap-5 my-10">
        {
          data.ourOfferings.map((offering: any) => (
            <div key={offering.id}>
              <h2>{offering.heading}</h2>
              <p>{offering.description}</p>
              {offering.icon && <img src={"http://localhost:1337" + offering.icon.url} alt={offering.title} />}
              {offering.cta && <a href={offering.cta.url}>{offering.cta.label}</a>}
            </div>
          ))
        }
      </div>
      <LangSwitcher /> */}
      <Page data={data} />
    </>
  );
}
