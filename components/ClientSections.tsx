"use client";

import TrendingSection from "@/components/TrendingSection";
import TopRatedSection from "@/components/TopRatedSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedSection from "@/components/FeaturedSection";

function ClientSections() {
  return (
    <>
      {/* Featured Section */}
      <FeaturedSection />

      {/* Trending Section */}
      <TrendingSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Top Rated Section */}
      <TopRatedSection />
    </>
  );
}

export default ClientSections;
