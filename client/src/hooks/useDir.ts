'use client'

import { useLocale } from "next-intl"

const useDir = () => {
    const locale = useLocale()

    if (locale === 'ar') return { locale, dir: 'rtl', dirClassNames: 'text-right' }

    return { locale, dir: 'ltr', dirClassNames: 'text-left' }
}

export default useDir
