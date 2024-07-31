import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl"> Home page</h1>
      <div className="mt-4">
      <Link className={buttonVariants()} href="/admin">Open Admin page</Link>
      </div>
    </div>
  )
}
