import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Layout from "./layout";
export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <Skills />
      </Layout>
    </div>
  );
}
