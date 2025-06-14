"use client";

import { useSession } from "@/context/SessionContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session === null) {
      router.push("/"); // Redirect if not logged in
    }
  }, [session, router]);

  if (session === null) return null; // or loading spinner

  return <>{children}</>;
}
