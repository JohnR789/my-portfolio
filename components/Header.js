// components/Header.js
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center p-6">
        <div className="text-xl font-bold">
          <Link href="/">YourName</Link>
        </div>
        <div className="space-x-4">
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
