import { notFound } from 'next/navigation';
import { getRequestConfig, RequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

export default getRequestConfig(async ({requestLocale}) => {
    // const locale = await requestLocale;
    
    // Typically corresponds to the `[locale]` segment
    const requested = await requestLocale;
    const locale = hasLocale(locales, requested)
    ? requested
    : defaultLocale;
    console.log("Locale:", locale);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!locales.includes(locale as any)) notFound() as RequestConfig;
    
    return {
        locale,
        // Load messages for the requested locale
        messages: (await import(`./messages/${locale}.json`)).default
    } as RequestConfig;
});