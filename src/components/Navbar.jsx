import * as React from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 mx-auto">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <Link to="/" className="mr-8 font-bold text-2xl flex items-center">
            RTG
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 flex-1 justify-center">
            <Link to="/" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
              Products
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-foreground/60 hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <Link 
                to="/" 
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar