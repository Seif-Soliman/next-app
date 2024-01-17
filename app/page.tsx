"use client";
import { useState } from "react";
// import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import Image from "next/image";
// import flowers from "@/public/images/Flowers.jpg";

export default function Home() {
  // const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard /> */}
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, "name");
          console.log(sorted);
        }}
      >
        Show
      </button>

      {/* <Image
        src="https://bit.ly/react-cover"
        alt="React"
        fill
        className="object-cover"
        sizes="(max-width:480px)100vw,(max-width:768px)50vw,33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}
