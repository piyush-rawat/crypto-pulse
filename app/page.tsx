import Footer from "@/components/Footer";
import Top100 from "@/components/Top100";
import Trending from "@/components/Trending";

const Home = async () => {
  return (
    <main className="relative">
      <h1 className="text-6xl font-orbiton text-center py-10 bg-gradient-to-t from-color-1 to-color-6 text-transparent bg-clip-text">
        Crypto Pulse
      </h1>

      <Trending />
      <Top100 />
      <Footer />
    </main>
  );
};

export default Home;
