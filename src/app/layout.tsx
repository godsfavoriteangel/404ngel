import type { Metadata } from "next";
import { JetBrains_Mono, Source_Code_Pro} from 'next/font/google';
import "../styles/globals.css";
import { ThemeProvider } from '@/app/context/themeContext'

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains'
})

const source_code = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-source_code', 
})

export const metadata: Metadata = {
  title: "404ngel",
  description: "harmony links",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${source_code.variable} ${jetbrains.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'root-mode';
                  document.documentElement.classList.add(theme);
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

