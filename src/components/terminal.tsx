'use client'
import { useState, useRef, useEffect } from "react"

export const Terminal = () => {
    const [inputValue, setInputValue] = useState('')
    const [history, setHistory] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [history])

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    function handleCommand(input: string) {
        const trimmed = input.trim().toLowerCase()
        const newHistory = [...history, `harmony_net@site:~$ ${input}`]

        switch (trimmed) {
            case 'help': 
                newHistory.push('> available commands: help, whoami, dreams, sleep, kiss, clear ')
                break
            case 'whoami':
                newHistory.push('> harmony, 22, self-taught dev')
                break
            case 'dreams':
                newHistory.push('> create art, build weird things online, feel seen')
                break
            case 'curl affection.net':
                newHistory.push('> connection timed out :(')
                break
            case 'ping crush':
                newHistory.push('> connection timed out :(')
                break 
            case 'sleep':
                newHistory.push('> no. code.')
                break   
            case 'ls ~/brain':
                newHistory.push('> 404: not found')
                break
            case 'kiss':
                newHistory.push('> :3')
                break
            case 'clear':
                setHistory([])
                return
            default:
                newHistory.push(`command not found '${trimmed}'`)
        }

        setHistory(newHistory)
    }

    return (
        <div className="flex justify-end">
            <div 
            className="w-[600px] p-4 text-md h-96 overflow-y-auto font-jetbrains whitespace-pre-wrap break-words rounded-xl border border-current"
            onClick={() => inputRef.current?.focus()}
        >
            {/* display history */}
            {history.map((line, idx) => (
                <div key={idx}>{line}</div>
            ))}

            {/* current prompt */}
            <div className="flex">
                <span className="mr-2">harmony_net@site:~$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === 'Enter') {
                            handleCommand(inputValue)
                            setInputValue('')
                        }
                    }}
                    className="bg-transparent border-none outline-none w-full"
                    spellCheck={false}
                    autoComplete="off"
                    maxLength={96}
                ></input>
            </div>
        </div>
        
            <div ref={bottomRef} />
        </div>
    )
}