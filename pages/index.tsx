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
      </main>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
