// import type { GetStaticProps } from "next";
import Head from "next/head";

import { About, BackgroundCircles, Contact, Experience, Header, Hero, Projects, Skills } from "../src/components/";
import { experience, PageInfo, Project, Skill, Social } from "../src/config";
// import { fetchExperience, fetchPageInfo, fetchProject, fetchSkills, fetchSocials } from "../src/utils";

type Props = {
  pageInfo: PageInfo;
  experiences: experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, socials, skills }: Props) => (
  <div className="bg-[#202020] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 customScrollbar scroll-smooth">
    <Head>
      <title>Emji&apos;s Portfolio</title>
      <meta name="description" content="Portfolio website Julien " />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header socials={socials} />
    <BackgroundCircles />
    <section id="hero" className="snap-start">
      <Hero pageInfo={pageInfo} />
    </section>
    <section id="about" className="snap-center">
      <About pageInfo={pageInfo} />
    </section>
    <section id="experience" className="snap-start">
      <Experience experiences={experiences} />
    </section>
    <section id="skills" className="snap-center">
      <Skills skills={skills} />
    </section>
    <section id="projects" className="snap-end">
      <Projects projects={projects} />
    </section>
    <section id="contact" className="snap-center">
      <Contact pageInfo={pageInfo} />
    </section>
  </div>
);

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: experience[] = await fetchExperience();
//   const skills: Skill[] = await fetchSkills();
//   const socials: Social[] = await fetchSocials();
//   const projects: Project[] = await fetchProject();

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       socials,
//       projects,
//     },
//     revalidate: 10,
//   };
// };
