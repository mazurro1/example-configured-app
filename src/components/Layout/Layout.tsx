import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

const Loader = dynamic(() => import("@ui/Loader"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Loader />
      <main className={inter.className}>{children}</main>
    </>
  );
}
