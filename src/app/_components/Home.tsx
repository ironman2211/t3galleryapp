import { db } from "~/server/db";
import Uploadbutton from "~/utils/uploadbutton";
const Home = async () => {
  const images = await db.query.images.findMany();
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-12 py-10 ">
      <div className="flex w-[90%] flex-wrap items-center justify-evenly gap-10 ">
        <div className="flex w-full items-center justify-center">
          <Uploadbutton />
        </div>
        {images.map((image) => (
          <div
            key={image.id}
            className="flex  h-[20rem] w-[18rem] cursor-pointer flex-col gap-2 rounded-xl bg-white p-2 text-black"
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
  );
};
export default Home;
