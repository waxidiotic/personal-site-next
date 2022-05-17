import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";

import avatarPic from "../public/me.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alex Bussey</title>
        <meta name="description" content="Personal site for Alex Bussey" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <div className="flex items-center justify-between mt-44">
          <div className="text-4xl max-w-2xl leading-[44px] font-bold">
            My name is <span className="text-accent">Alex</span> and I am a{" "}
            <span className="text-accent">front-end engineer</span> from{" "}
            <span className="text-accent">New Jersey, USA</span>.
          </div>
          <div className="flex items-center rounded-md shadow-avatar-orange">
            <Image
              className="rounded-md"
              src={avatarPic}
              alt="Cartoon depiction of me"
            />
          </div>
        </div>
        <div className="text-3xl max-w-2xl leading-[44px] font-bold">
          I am <span className="text-accent">looking for work</span>!
        </div>
      </main>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
