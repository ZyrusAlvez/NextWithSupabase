"use client";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

const auth = () => {

  return (
  <main className="flex items-center justify-center" style={{ height: "calc(100vh - 4rem)", marginTop: "4rem" }}>
    <SignUp />
  </main>
  )
}

export default auth