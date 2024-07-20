import Link from "next/link";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col">
        <h2 className="text-8xl font-bold text-center mb-6">
          Suppose to be the home XD
        </h2>

        <Link href="/patients" className="self-center">
          <Button>Please, go to patients page</Button>
        </Link>
      </div>
    </section>
  );
}
