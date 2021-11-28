import Head from "next/head";
import Image from "next/image";
import avatarPic from "../public/me.png";
import type { NextPage } from "next";

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
            My name is <span className="text-construction-accent">Alex</span>{" "}
            and I am a{" "}
            <span className="text-construction-accent">front-end engineer</span>{" "}
            from{" "}
            <span className="text-construction-accent">New Jersey, USA</span>.
          </div>
          <div className="flex items-center rounded-md shadow-avatar">
            <Image src={avatarPic} alt="Cartoon depiction of me" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
