'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const LangSwitcher = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    // Handle locale change
    // This will redirect to the same path with the new locale
    // If the path is empty, it will redirect to the new locale root
    // This is useful for switching languages in a Next.js app
    // without losing the current path.
    const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value as string;
        const path = pathname.split('/').slice(2).join('/'); // Get the path after the locale
        // If the path is empty, just redirect to the new locale root
        if (!path) {
            router.replace(`/${newLocale}`);
            return;
        }
        // Redirect to the same path with the new locale
       router.replace(`/${newLocale}${path ? `/${path}` : ''}`);
    };
    return (
        <select value={locale} onChange={handleLocaleChange}>
            <option value="en">English</option>
            <option value="ar">العربية</option>
        </select>
    )
}

export default LangSwitcher
