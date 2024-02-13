import githubApi from "@/services/githubApi";
import { TUserData, UserSchema } from "@/schemas/user.schema";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Home = () => {
  return (
    <section className="body min-h-screen">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </section>
  );
};

export default Home;