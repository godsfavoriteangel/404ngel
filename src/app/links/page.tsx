'use client'
import { Nav } from '@/components/nav'
import { LinksTree } from '@/components/linktree'
import { Terminal } from '@/components/terminal'

export default function Links() {
    return (
        <div>
            <Nav />
            <main>
                <div className='flex mt-8'>
                    <div className='w-full max-w-[450px] break-words overflow-x-hidden'>
                        <LinksTree />
                    </div>
                    <div className='w-full max-w-[700px] break-words overflow-x-hidden'>
                        <Terminal />
                    </div>
                </div>
                
                
            </main>
        </div>
    )
}