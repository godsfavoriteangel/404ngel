'use client'
import Link from 'next/link'

export const LinksTree = () => {
  return (
    <div className="font-jetbrains text-lg ml-20">
      <div className="pl-2">♥︎ harmony_net/</div>
      <div className="pl-6">♥︎ socials/</div>
      <div className="pl-10">
        <a href="https://twitter.com/harmonyevaa" target="_blank" rel="noopener noreferrer">├── twitter.txt</a><br />
        <a href="https://instagram.com/harmonyevaa" target="_blank" rel="noopener noreferrer">├── instagram.png</a><br />
        <a href="https://tiktok.com/@harmonyevaa" target="_blank" rel="noopener noreferrer">├── tiktok.url</a><br />
        <a href="https://onlyfans.com/harmonyeva" target="_blank" rel="noopener noreferrer">├── onlyfans.url</a><br />
        <a href="https://twitch.tv/harmony" target="_blank" rel="noopener noreferrer">└── twitch.tv</a>
      </div>
      <div className="pl-6">♥︎ misc/</div>
      <div className="pl-10">
        <a href="https://discord.gg/BJvCdJNQZD" target="_blank" rel="noopener noreferrer">├── discord.exe</a><br />
        <Link href="/github" className="hover:underline">├── github.sys</Link><br />
        <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer">└── steam.exe</a>
      </div>
    </div>
  )
}