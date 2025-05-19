import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>Send Money Faster</title>
        <meta name="description" content="The easiest way to send money instantly from your phone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-lg drop-shadow-lg">
          Experience the <span className="text-yellow-300">easiest</span> and <span className="text-green-300">fastest</span> way to send money—right from your phone.
        </h1>
      </div>
    </div>
  );
} 