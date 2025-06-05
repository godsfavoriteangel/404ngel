'use client'
import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/app/context/themeContext'

export const Nav = () => {
    const { theme, setTheme } = useTheme()

    const nextTheme = () => {
        const order = ['root-mode', 'angel-mode', 'void-mode']
        const nextIndex = (order.indexOf(theme) + 1) % order.length
        const newTheme = order[nextIndex] as typeof theme
        setTheme(newTheme)
    }

    return (
        <div className="">
            <ul id='nav' className='flex flex-row justify-center'>
                <li className='mt-16 flex-1 text-center text-xl font-source_code'>
                    <Link href="/" className=''>soul</Link>
                </li>
                <li className='mt-16 flex-1 text-center text-xl font-source_code'>
                    <Link href="/links">links</Link>
                </li>
                <li className='flex-1'>
                    <pre className="ascii text-lg">
{String.raw`
⠀⠀⣀⣀⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣀⣀⡀⠀
⢰⠋⠀⠀⠀⠀⠀⠉⠲⣄⠀⢀⠔⠋⠁⠀⠀⠀⠀⠉⡆
⠈⢑⠖⠂⠀⢀⠔⠒⢢⠘⣦⠏⡴⠒⠲⡄⠀⠀⠲⡚⠁
⠀⠈⠒⢲⠀⢸⡀⠓⠊⣠⠋⢆⠙⠚⢀⡇⠀⡖⠖⠁⠀
⠀⠀⠀⠀⠉⠉⠈⠉⠉⠀⠀⠀⠉⠉⠁⠈⠉⠁⠀⠀⠀
`}
                    </pre>
                </li>
                <li className='mt-16 flex-1 text-center text-xl font-source_code'>
                    <Link href="/creation">creation</Link>
                </li>
                <li className='mt-16 flex-1 text-center text-xl font-source_code cursor-pointer'>
                    <h1 onClick={nextTheme}>mode</h1>
                </li>
            </ul>
        </div>
    )
}