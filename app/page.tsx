import React, { Suspense } from "react";
import Image from "next/image";

export const revalidate = 0;

import { Feed, FeedSkeleton } from "./components/feed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex place-items-center ">
        <Image src="/ampt.svg" alt="Ampt Logo" width={180} height={37} />
        <p className="m-3 text-xl">+</p>
        <Image src="/nextjs.svg" alt="Next.js Logo" width={180} height={37} />
      </div>
      <div className="m-4">
        <h1 className="text-lg text-center">André Souza</h1>
        <Suspense fallback={<FeedSkeleton />}>
          <Feed />
        </Suspense>
      </div>
    </main>
  );
}
