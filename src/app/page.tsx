import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <p>Hellow world</p>
        <div>
          {posts.map((post) => (
            <h2 key={post.id}>{post.name}</h2>
          ))}
        </div>
      </div>
    </main>
  );
}
