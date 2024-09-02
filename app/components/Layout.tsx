"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Home, Users, Briefcase, Mail, ShoppingBasket } from "lucide-react"
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const NavItem = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
      {children}
    </Link>
  )

  const SidebarContent = () => (
    <nav className="space-y-2">
        
      <Link href="/" className="flex items-center text-black space-x-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      <Link href="/about" className="flex items-center space-x-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
        <Users className="w-4 h-4" />
        <span>About Us</span>
      </Link>
      <Link href="/projects" className="flex items-center space-x-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
        <Briefcase className="w-4 h-4" />
        <span>Projects</span>
      </Link>
      <Link href="/products" className="flex items-center space-x-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
        <ShoppingBasket className="w-4 h-4" />
        <span>Products</span>
      </Link>
      <Link href="/contact" className="flex items-center space-x-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
        <Mail className="w-4 h-4" />
        <span>Contact Me</span>
      </Link>
      
    </nav>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full bg-gray-400">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-3xl font-sans ml-[20px] text-gray-500 text-white">RootXran</span>
          </Link>
          <nav className="hidden md:flex items-center text-center  space-x-4 lg:space-x-6">
            <Link href="/" className="flex items-center space-x-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      <Link href="/about" className="flex items-center space-x-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
        <Users className="w-4 h-4" />
        <span>About Us</span>
      </Link>
      <Link href="/projects" className="flex items-center space-x-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
        <Briefcase className="w-4 h-4" />
        <span>Projects</span>
      </Link>
      <Link href="/products" className="flex items-center space-x-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
        <ShoppingBasket className="w-4 h-4" />
        <span>Products</span>
      </Link>
      <Link href="/contact" className="flex items-center space-x-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
        <Mail className="w-4 h-4" />
        <span>Contact Me</span>
      </Link>
      
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
            <Menu className="h-6 w-6 text-white" />
            <span className="sr-only ">Toggle sidebar</span>
          </Button>
        </div>
      </header>
      <div className="flex-1 flex ">
        <aside className="hidden md:flex  flex-col border-r bg-muted">
          <div className="p-4 ">
            <SidebarContent />
          </div>
        </aside>
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="w-64 sm:max-w-none text-white">
            <div className="flex items-center justify-between mb-4 text-white">
              <span className="font-bold text-xl text-white">Menu</span>
              <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <SidebarContent />
          </SheetContent>
        </Sheet>
        <main className="flex-1 overflow-y-auto">
          <div className="">
            {children}
          </div>
        </main>
      </div>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground bg-gray-400">
        <div className="container">
          © Built by RootXran. The source code is available on GitHub
        </div>
      </footer>
    </div>
  )
}