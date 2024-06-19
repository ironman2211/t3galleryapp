import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#c8a5f8] to-[#8086e9] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 py-10 mx-auto ">
        <div className="flex w-[90%] flex-wrap items-center justify-evenly gap-10 ">
          {[...images,...images,...images].map((image) => (
            <div
              key={image.id}
              className="flex  h-[20rem] w-[18rem] flex-col gap-2 bg-white text-black p-2 rounded-xl cursor-pointer"
            >
              <div key={image.id} className="h-[85%] w-full rounded-xl">
                <img
                  src={image.url}
                  alt={image.name}
                  className="h-full w-full rounded-xl"
                />
              </div>
              <h2 className="text-center">{image.name}</h2>
            </div>
          ))}
          
        </div>
      </div>
    </main>
  );
}
