import type { GetStaticProps } from "next";
import Head from "next/head";

import { 
  About, 
  BackgroundCircles, 
  Contact, 
  CTA,
  Experience, 
  FAQ,
  Header, 
  Hero, 
  Pricing,
  Projects, 
  Services,
  Skills,
  Testimonials 
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
      <title>Emji Devimanus - AI Solutions Architect</title>
      <meta 
        name="description" 
        content="AI Solutions Architect specializing in restaurant automation, test engineering, and custom AI implementations. Building ADA Systems platform for €1M revenue growth." 
      />
      <meta name="keywords" content="AI, Automation, Restaurant Technology, Test Automation, Full Stack Development, ADA Systems" />
      <meta property="og:title" content="Emji Devimanus - AI Solutions Architect" />
      <meta property="og:description" content="Specializing in AI-powered automation solutions for restaurants and enterprises." />
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

    {/* Services Section - NEW */}
    <section id="services" className="relative">
      <Services />
    </section>

    {/* Projects Section */}
    <section id="projects" className="relative">
      <Projects projects={projects} />
    </section>

    {/* Testimonials Section - NEW */}
    <section id="testimonials" className="relative">
      <Testimonials />
    </section>

    {/* Pricing Section - NEW */}
    <section id="pricing" className="relative">
      <Pricing />
    </section>

    {/* About Section */}
    <section id="about" className="relative py-20">
      <About pageInfo={pageInfo} />
    </section>

    {/* Mid-page CTA - NEW */}
    <CTA 
      variant="hero"
      title="Ready to Transform Your Business?"
      subtitle="Join successful businesses using AI"
      description="See how our proven AI solutions can drive the same 400% growth for your business. Free consultation to discuss your specific needs."
    />

    {/* Experience Section */}
    <section id="experience" className="relative py-20">
      <Experience experiences={experiences} />
    </section>

    {/* Skills Section */}
    <section id="skills" className="relative py-20">
      <Skills skills={skills} />
    </section>

    {/* FAQ Section - NEW */}
    <section id="faq" className="relative">
      <FAQ />
    </section>

    {/* Contact Section */}
    <section id="contact" className="relative py-20">
      <Contact pageInfo={pageInfo} />
    </section>

    {/* Footer */}
    <footer className="bg-dark-800 border-t border-dark-700 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2026 Emji Devimanus. Building AI solutions that drive results.
        </p>
      </div>
    </footer>
  </div>
);

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
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
};