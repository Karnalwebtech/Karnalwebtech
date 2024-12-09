import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-10 mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Karnalwebtech</h3>
            <p className="text-sm text-muted-foreground">
            Crafting cutting-edge web solutions to bring your ideas to life. Let’s build something extraordinary together!
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/projects" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link href="/about-us" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="/contact-us" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              <Link href="/privacy-policy" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy policy</Link>
              <Link href="/terms-conditions " prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms & conditions </Link>
              <Link href="/faq " prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Faq </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button  className="w-full bg-black hover:text-black">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <p className="text-sm text-muted-foreground">© 2023 Karnalwebtech. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link target="__blank"  href="https://www.linkedin.com/in/karnalwebtech" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link target="__blank" href="https://www.instagram.com/karnalwebtech" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}