import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <p>Hellow world</p>
        <div className="flex w-full flex-wrap gap-12">
          {images.map((image) => (
            <div key={image.id} className="flex  h-[20rem] w-[20rem] flex-col gap-2">
              <img src={image.url} alt={image.name} className="h-full w-full  " />
              <h2>{image.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
