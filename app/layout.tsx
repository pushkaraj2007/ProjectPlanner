import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TokenState from '@/context/tokens/TokenState'
import TopLoadingBar from './TopLoadinggBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'ProjectPlanner',
    description: 'AI project suggestion tool',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`{inter.className} bg-gradient-to-b from-gray-50 to-gray-100 `}>
                <TokenState>
                    <Providers>
                        <Header />
                        <TopLoadingBar>
                            {children}
                        </TopLoadingBar>
                        <Footer />
                    </Providers>
                </TokenState>
            </body>
        </html>
    )
}
