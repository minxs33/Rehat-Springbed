'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/16/solid'

export default function SwitchThemes() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="flex items-center">
            <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="flex items-center justify-center"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? (
                    <SunIcon className="w-5 h-5 text-foreground" aria-hidden="true" />
                ) : (
                    <MoonIcon className="w-5 h-5 text-foreground" aria-hidden="true" />
                )}
            </button>
        </div>
    )
}