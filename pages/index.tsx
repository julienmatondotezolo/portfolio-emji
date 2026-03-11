import type { GetStaticProps } from "next";
import Head from "next/head";

import {
  About,
  BackgroundCircles,
  Certificates,
  Contact,
  Experience,
  Header,
  Hero,
  Projects,
  Skills,
  TestAutomation,
} from "../src/components/";
import { experience, PageInfo, Project, Skill, Social } from "../src/config";
import { 
  fetchExperience, 
  fetchPageInfo, 
  fetchProject, 
  fetchSkills, 
  fetchSocials 
} from "../src/utils";

type Props = {
  pageInfo: PageInfo;
  experiences: experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, socials, skills }: Props) => (
  <div className="bg-dark-900 text-white overflow-x-hidden">
    <Head>
      <title>Julien Matondo - Test Automation Engineer & AI Solutions Architect</title>
      <meta 
        name="description" 
        content="Expert Test Automation Engineer and AI Solutions Architect specializing in enterprise test automation, restaurant automation, and custom AI implementations. Delivering measurable results with cutting-edge technology." 
      />
      <meta name="keywords" content="Test Automation, AI, Automation, Restaurant Technology, Enterprise Testing, Full Stack Development, Selenium, Cypress, Playwright" />
      <meta property="og:title" content="Julien Matondo - Test Automation Engineer & AI Solutions Architect" />
      <meta property="og:description" content="Expert in test automation and AI-powered solutions for enterprises and restaurants." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap" 
        rel="stylesheet" 
      />
    </Head>

    <Header socials={socials} />
    <BackgroundCircles />
    
    {/* Hero Section */}
    <section id="hero" className="relative">
      <Hero pageInfo={pageInfo} />
    </section>

    {/* Test Automation Section - TOP PRIORITY */}
    <section id="test-automation" className="relative">
      <TestAutomation />
    </section>

    {/* Projects Section */}
    <section id="projects" className="relative">
      <Projects projects={projects} />
    </section>

    {/* About Section */}
    <section id="about" className="relative py-20">
      <About pageInfo={pageInfo} />
    </section>

    {/* Experience Section */}
    <section id="experience" className="relative">
      <Experience experiences={experiences} />
    </section>

    {/* Skills Section */}
    <section id="skills" className="relative">
      <Skills skills={skills} />
    </section>

    {/* Certificates Section */}
    <section id="certificates" className="relative">
      <Certificates />
    </section>

    {/* Contact Section */}
    <section id="contact" className="relative py-20">
      <Contact pageInfo={pageInfo} />
    </section>

    {/* Footer */}
    <footer className="bg-dark-800 border-t border-dark-700 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2026 Julien Matondo. Delivering excellence in test automation and AI solutions.
        </p>
      </div>
    </footer>
  </div>
);

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: experience[] = await fetchExperience();
    const skills: Skill[] = await fetchSkills();
    const socials: Social[] = await fetchSocials();
    const projects: Project[] = await fetchProject();

    return {
      props: {
        pageInfo,
        experiences,
        skills,
        socials,
        projects,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    
    // Fallback data if Sanity fails
    const pageInfo: PageInfo = {
      _id: "1",
      _type: "pageInfo",
      name: "Julien Matondo",
      role: "Test Automation Engineer & AI Solutions Architect", 
      email: "info@emji.be",
      phoneNumber: "+32 477 95 34 30",
      address: "Brussels, Belgium",
      backgroundInformation: "Expert Test Automation Engineer and AI Solutions Architect specializing in enterprise test automation and restaurant automation solutions.",
      profilePic: null,
      heroImage: null,
    };
    
    return {
      props: {
        pageInfo,
        experiences: [],
        skills: [],
        socials: [],
        projects: [],
      },
      revalidate: 10,
    };
  }
};