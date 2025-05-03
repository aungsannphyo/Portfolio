"use client";

import AboutMe from "@/components/about-me/about-me";
import ProfileImage from "@/components/about-me/profile-image";
import Footer from "@/components/footer";

const AboutMePage = () => {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center space-y-6 md:space-y-0">
        <AboutMe />
        <ProfileImage />
      </section>
      <Footer />
    </main>
  );
};

export default AboutMePage;
