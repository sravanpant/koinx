import { Button } from './ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600">KoinX</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/crypto-taxes">Crypto Taxes</Link>
            <Link href="/free-tools">Free Tools</Link>
            <Link href="/resource-center">Resource Center</Link>
            <Button>Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}