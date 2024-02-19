import Image from "next/image";
import Link from 'next/link';
import { SparklesIcon } from "@heroicons/react/24/solid";

import angryimg from '../../public/angryimg.png';

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Image
          className="blur-sm"
          src={angryimg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0" style={{ color: 'white' }}>
          <div> <i>tired of sitting through emails?</i></div>
          <div className="flex items-center" style={{ color: 'white' }}>

            <SparklesIcon className="w-12 h-22 mr-2" />
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
              Fillist.io
            </h1>
          </div>
          <Link href="/home" className="rounded-full bg-purple-800 text-white p-2 mt-2 shadow-lg hover:shadow-xl">Enter</Link>
        </div>
      </div>
    </>
  );
}