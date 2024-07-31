'use client';

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

const userAccountNav = () => {
  return (
    <Button onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in`
    })} variant='outline'>Sign out</Button>
  )
}

export default userAccountNav