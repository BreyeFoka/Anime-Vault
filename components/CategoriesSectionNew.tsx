"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchGenres, fetchAnimesByGenre, GenreProp } from "@/app/action";

function CategoriesSection() {
  const [genres, setGenres] = useState<GenreProp[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [animeResults, setAnimeResults] = useState<JSX.Element[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Predefined categories with emojis for better UX (fallback if API fails)
  const fallbackCategories = [
    { id: 1, name: "Action", russian: "Экшен", kind: "anime" },
    { id: 2, name: "Romance", russian: "Романтика", kind: "anime" },
    { id: 8, name: "Comedy", russian: "Комедия", kind: "anime" },
    { id: 7, name: "Drama", russian: "Драма", kind: "anime" },
    { id: 10, name: "Fantasy", russian: "Фэнтези", kind: "anime" },
    { id: 24, name: "Sci-Fi", russian: "Научная фантастика", kind: "anime" },
    { id: 14, name: "Horror", russian: "Ужасы", kind: "anime" },
    { id: 36, name: "Slice of Life", russian: "Повседневность", kind: "anime" },
  ];

  const categoryEmojiMap = {
    Action: "⚔️",
    Adventure: "🗺️",
    Comedy: "😄",
    Drama: "🎭",
    Fantasy: "🔮",
    Horror: "👻",
    Romance: "💕",
    "Sci-Fi": "🚀",
    "Science Fiction": "🚀",
    "Slice of Life": "🌸",
    Mystery: "🔍",
    Thriller: "⚡",
    Sports: "⚽",
    Music: "🎵",
    School: "🏫",
    Military: "🪖",
    Magic: "✨",
    Supernatural: "👻",
    Mecha: "🤖",
    Space: "🌌",
  };

  const categoryGradientMap = {
    Action: "from-red-500 to-pink-600",
    Adventure: "from-orange-500 to-red-600",
    Comedy: "from-yellow-500 to-orange-600",
    Drama: "from-blue-500 to-cyan-600",
    Fantasy: "from-purple-500 to-indigo-600",
    Horror: "from-gray-700 to-black",
    Romance: "from-pink-500 to-purple-600",
    "Sci-Fi": "from-green-500 to-teal-600",
    "Science Fiction": "from-green-500 to-teal-600",
    "Slice of Life": "from-emerald-500 to-green-600",
    Mystery: "from-indigo-500 to-purple-600",
    Thriller: "from-red-600 to-red-800",
    Sports: "from-blue-600 to-green-600",
    Music: "from-purple-400 to-pink-500",
    School: "from-blue-400 to-indigo-500",
    Military: "from-gray-600 to-green-700",
    Magic: "from-purple-600 to-pink-500",
    Supernatural: "from-gray-500 to-purple-700",
    Mecha: "from-gray-500 to-blue-600",
    Space: "from-indigo-600 to-purple-800",
  };

  useEffect(() => {
    const loadGenres = async () => {
      const genresData = await fetchGenres();
      setGenres(
        genresData.length > 0 ? genresData.slice(0, 8) : fallbackCategories
      );
    };
    loadGenres();
  }, []);

  const handleCategoryClick = async (genreId: number, genreName: string) => {
    setSelectedGenre(genreName);
    setLoading(true);
    setShowResults(true);

    try {
      const results = await fetchAnimesByGenre(genreId.toString());
      setAnimeResults(results);
    } catch (error) {
      console.error("Error fetching anime by genre:", error);
      setAnimeResults([]);
    } finally {
      setLoading(false);
    }
  };

  const getEmoji = (name: string): string => {
    return categoryEmojiMap[name as keyof typeof categoryEmojiMap] || "🎌";
  };

  const getGradient = (name: string): string => {
    return (
      categoryGradientMap[name as keyof typeof categoryGradientMap] ||
      "from-gray-500 to-gray-700"
    );
  };

  return (
    <section id="categories" className="px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Browse by <span className="red-gradient">Categories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover anime series tailored to your favorite genres and themes
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {genres.map((genre, index) => (
            <motion.div
              key={genre.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(genre.id, genre.name)}
              className="group cursor-pointer"
            >
              <div
                className={`relative bg-gradient-to-br ${getGradient(
                  genre.name
                )} p-6 rounded-2xl text-white overflow-hidden hover:shadow-2xl transition-all duration-300`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full transform translate-x-6 -translate-y-6" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full transform -translate-x-4 translate-y-4" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <div className="text-3xl">{getEmoji(genre.name)}</div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg group-hover:scale-105 transition-transform">
                      {genre.name}
                    </h3>
                    <p className="text-sm opacity-90">
                      Explore {genre.name.toLowerCase()}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Section */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Results Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">
                {selectedGenre} <span className="text-purple-400">Anime</span>
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowResults(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center py-12">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
                />
              </div>
            )}

            {/* Results Grid */}
            {!loading && animeResults.length > 0 && (
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {animeResults}
              </div>
            )}

            {/* No Results */}
            {!loading && animeResults.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No anime found for {selectedGenre} category.
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* View All Button */}
        {!showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-200"
            >
              Explore All Categories
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default CategoriesSection;
