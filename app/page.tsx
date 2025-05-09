"use client";

import AboutMe from "@/features/personal/about-me/about-me";
import ProfileImage from "@/features/personal/about-me/profile-image";
import Footer from "@/components/footer/footer";
import ContactMe from "@/features/personal/contact-me/contact-me";

const HomePage = () => {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center space-y-6 md:space-y-0">
        <AboutMe />
        <ProfileImage />
      </section>
      <ContactMe />
      <Footer />
    </main>
  );
};

export default HomePage;
