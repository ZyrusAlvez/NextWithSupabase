"use client";

import { useState } from "react"
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

const auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  return (
  <main className="flex items-center justify-center" style={{ height: "calc(100vh - 4rem)", marginTop: "4rem" }}>
    {
      isLoggedIn
      ?
      <SignUp />
      :
      <SignIn />
    }
  </main>
  )
}

export default auth