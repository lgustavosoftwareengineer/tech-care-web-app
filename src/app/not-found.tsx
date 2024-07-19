import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button } from "./components/Button";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col">
        <h2 className="text-8xl font-bold text-center mb-6">Ops!</h2>
        <h2 className="text-8xl font-bold text-center mb-6">
          Page Not Found :(
        </h2>
        <Link href="/" className="self-center">
          <Button>Please, return Home</Button>
        </Link>
      </div>
    </div>
  );
}
