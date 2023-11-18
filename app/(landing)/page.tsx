import LandingContent from "@/components/landing-content"
import LandingHero from "@/components/landing-hero"
import LandingNavbar from "@/components/landing-navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {
  return (
    <div className="h-full">
      {/* Landing Page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button>
            Register
          </Button>
        </Link>
      </div> */}
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}

export default LandingPage