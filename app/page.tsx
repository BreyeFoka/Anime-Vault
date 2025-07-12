import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import ClientSections from "@/components/ClientSections";
import { fetchAnimes } from "./action";

async function Home() {
  const data = await fetchAnimes(1);

  return (
    <div className="space-y-20 pb-20">
      {/* Client-side sections */}
      <ClientSections />

      {/* Main Anime Grid */}
      <section id="explore" className="px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Explore <span className="red-gradient">All Anime</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Dive into our vast collection of anime series and movies from
              every genre
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {data}
          </div>

          <LoadMore />
        </div>
      </section>
    </div>
  );
}

export default Home;
