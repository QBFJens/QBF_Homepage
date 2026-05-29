import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'QBITFLOW | Quantum sensing technologies', description: 'Quantum sensors, alkali metal sources, preparation chambers, engineering solutions and education.' }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
