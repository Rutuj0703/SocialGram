import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
import Link from 'next/link'
import { BellIcon, HomeIcon, UserIcon } from 'lucide-react'
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import RouteLoader from "@/components/RouterLoader";


async function DesktopNavbar() {
  const user = await currentUser()
//   console.log("User is here: ",user);

  return (
    <div className="hidden md:flex items-center space-x-4">
        <RouteLoader />
        <ModeToggle />

        <Button variant="ghost" className=" flex items-center gap-2" asChild>
            <Link href="/">
                <HomeIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Home</span>
            </Link>
        </Button>
        {user ? (
            <>
                <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href="/notifications">
                <BellIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Notifications</span>
                </Link>
                </Button>
                <Button variant="ghost" className=" flex items-center gap-2" asChild>
                <Link href={`/profile/${
                user.username ?? user?.emailAddresses[0].emailAddress.split("@")[0]
                }`}>
                <UserIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Profile</span>
                </Link>
                </Button>
                <UserButton />
            </>
        ):(
            <>
            <SignInButton mode="modal">
                <Button variant="default">Login</Button>
            </SignInButton>
            <SignUpButton mode="modal">
                <Button variant="default">Sign Up</Button>
            </SignUpButton>
            </>
        )}
        
    </div>
  )
}

export default DesktopNavbar