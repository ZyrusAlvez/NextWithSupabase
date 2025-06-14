"use client";

import { useEffect } from "react"
import SignIn from "@/components/SignIn";
import { useSession } from "@/context/SessionContext";
import { useRouter } from "next/navigation";

const Auth = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/taskManager"); // your task manager route
    }
  }, [session, router]);

  return (
    <main className="flex items-center justify-center h-scren">
      <div className='h-16 mb-4' />
      <SignIn />
    </main>
  );
};

export default Auth;
