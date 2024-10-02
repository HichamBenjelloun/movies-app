import { MovieResult } from 'moviedb-promise';
import Image from 'next/image';
import path from 'node:path';
import Link from 'next/link';

const IMG_URL = process.env.IMG_URL!;

export default function MovieCard({
  id,
  title,
  overview,
  poster_path,
}: MovieResult) {
  return (
    <Link href={`/movies/${id}`} className=" hover:z-10">
      <div className="p-2 min-w-[256px] w-[256px] h-[256px] bg-white overflow-hidden hover:border-purple-900 hover:scale-150 transform transition duration-y border-4 border-solid cursor-pointer">
        <div className="w-full h-32 bg-gray-500">
          {poster_path && (
            <Image
              className="object-cover w-full h-full"
              src={poster_path && path.join(IMG_URL, poster_path)}
              alt=""
              width={64}
              height={64}
            />
          )}
          <h2 className="text-lg text-black">{title}</h2>
          <p className="text-black text-sm line-clamp-4">{overview}</p>
        </div>
      </div>
    </Link>
  );
}
