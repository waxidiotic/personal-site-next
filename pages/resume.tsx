import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface Job {
  company_name: string;
  start_date: string;
  end_date?: string;
  locations: string[];
  positions: {
    title: string;
    description_items: string[];
  }[];
}

const Entry = ({ job }: { job: Job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { company_name, start_date, end_date, locations, positions } = job;

  return (
    <section
      className="border-2 border-accent rounded-xl p-4 hover:shadow-xl dark:hover:shadow-accent/20 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between w-full">
        <div>
          <div className="leading-[32px] text-accent text-2xl">
            {company_name}
          </div>
          <div className="flex gap-8 text-gray-500">
            <div>
              {start_date} - {end_date ? end_date : "Present"}
            </div>
            <div>
              {locations.length > 1 ? locations.join(" / ") : locations[0]}
            </div>
          </div>
        </div>
        <div className="text-accent  pr-4 flex items-center">
          {isExpanded ? (
            <FaAngleUp className="h-7 w-7" />
          ) : (
            <FaAngleDown className="h-7 w-7" />
          )}
        </div>
      </div>
      {isExpanded &&
        positions.map(({ title, description_items }, i) => (
          <div key={i}>
            <div className="text-accent mt-4 text-sm">{title}</div>
            <div className="mt-3 font-normal">
              {description_items.length > 1 ? (
                <ul>
                  {description_items.map((item, i) => (
                    <li key={i} className="list-disc list-inside">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                description_items[0]
              )}
            </div>
          </div>
        ))}
    </section>
  );
};

const Resume: NextPage = ({
  jobs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Alex Bussey - Resumé</title>
      </Head>
      <main>
        <div className="flex flex-col gap-6 mt-24 font-bold">
          <div className="flex justify-between">
            <div className="text-4xl">Resumé</div>
            <div className="flex items-end cursor-pointer hover:text-accent">
              <a href="resume.pdf" download>
                Download PDF
              </a>
            </div>
          </div>
          {jobs.map((job: Job, i: number) => (
            <Entry key={i} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await require("../data/jobs.json");

  return {
    props: {
      jobs: res.jobs,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default Resume;
