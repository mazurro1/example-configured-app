import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: PropsWithChildren) {
  return <main className={inter.className}>{children}</main>;
}
