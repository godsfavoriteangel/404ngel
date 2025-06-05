'use client'
import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/loading';
import { Nav } from '@/components/nav';

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const hasSeen = sessionStorage.getItem('hasSeenLoading')

    if (!hasSeen) {
      sessionStorage.setItem('hasSeenLoading', 'true')
      setLoading(true)

      const timer = setTimeout(() => {
        setLoading(false)
        setHasChecked(true)
      }, 3500)

      return () => clearTimeout(timer)
    } else {
      setHasChecked(true)
    }
  }, [])

  if (!hasChecked && !loading) return null

  if (loading) return <LoadingScreen />

  return (
    <div>
      <Nav />
      <main>
        <pre className="whitespace-pre font-mono text-sm leading-none mx-16">
  {String.raw`
  _                                                  ____   _  _    ___    _  _                     _
 | |__   __ _ _ __ _ __ ___   ___  _ __  _   _      / / /  | || |  / _ \  | || |  _ __   __ _  ___ | |             
 | '_ \ / _\`| '__| '_ \` _ \/ _ \| '_ \| | | |    / / /   | || |_| | | | | || |_| '_ \ / _\`|/ _ \| |
 | | | | (_| | |  | | | | | | (_) | | | | |_| |   / / /    |__   _| |_| | |__   _| | | | (_| |  __/| | 
 |_| |_|\__,_|_|  |_| |_| |_|\___/|_| |_|\__, |  /_/_/        |_|  \___/     |_| |_| |_|\__, |\___ |_| 
                                          |___/                                          |___/
                                                      
  `}
        </pre>
        <h1 className='mx-20 font-jetbrains font-bold'>status: online (low latency)</h1>
        <h1 className='mx-20 font-jetbrains font-bold'>vers 1.0 — initializing</h1>
        <p className='mx-20 mt-6 mb-3 font-jetbrains'>welcome to the cultivation of my online soul u_u this space is an archive of thoughts, experiments, and digital rituals.</p>
        <p className='mx-20 my-3 font-jetbrains'>i write code and post online. la-based. self-taught. attempting to make meaningful connections.</p>
        <p className='mx-20 my-3 font-jetbrains'>i don’t believe in bios, everything you need to know about me is embedded across my net presence. follow along wherever you feel drawn.</p>
        <p className='mx-20 my-3 font-jetbrains'>business inq: harmonyhk02@gmail.com</p>
        <p className='mx-20 my-3 font-jetbrains'>currently installed in my system: final fantasy vii, evangelion, counter-strike, persona</p>
      </main>
    </div>
  )
}