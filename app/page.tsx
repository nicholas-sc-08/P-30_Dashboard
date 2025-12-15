"use client";

import UserCard from "@/components/user-card";
import { cardType } from "@/types/enum";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="w-screen h-screen flex items-center justify-evenly">
      <div className="w-90" onClick={() => router.push("/user")}>
        <UserCard type={cardType.user} />
      </div>
      <div className="w-90" onClick={() => router.push("/")}>
        <UserCard type={cardType.product} />
      </div>
    </div>
  );
}
