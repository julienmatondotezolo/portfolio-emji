import type { NextPage } from "next";
import Head from "next/head";

import { About, Header, Hero } from "../src/components/";

const Home: NextPage = () => (
  <div className="bg-[#202020] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Head>
      <title>Emji&apos;s Portfolio</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <section id="hero" className="snap-start">
      <Hero />
    </section>

    <section id="hero" className="snap-center">
      <About />
    </section>
  </div>
);

export default Home;
