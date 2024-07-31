import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import {  House } from "lucide-react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import UserAccountnav from "./UserAccountnav"





const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full top-0">
        <div className="container flex items-center justify-between" >
            <Link href='/'> <House /> </Link>
            {session?.user ? (
              <UserAccountnav/>
            ):(
              <Link className={buttonVariants()} href='/sign-in'> Sign in </Link>
            )}
        </div> 
        

    </div>
  )
}

export default Navbar