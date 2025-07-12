"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export interface GenreProp {
  id: number;
  name: string;
  russian: string | null;
  kind: string;
}

export interface StreamingService {
  name: string;
  url: string;
  logo?: string;
}

// Enhanced anime search with genre filtering
export const fetchAnimes = async (
  page: number,
  genre?: string,
  search?: string,
  order: string = "popularity"
) => {
  try {
    let url = `https://shikimori.one/api/animes?page=${page}&limit=12&order=${order}`;

    // Add genre filter if provided
    if (genre && genre !== "all") {
      url += `&genre=${genre}`;
    }

    // Add search filter if provided
    if (search && search.trim()) {
      url += `&search=${encodeURIComponent(search.trim())}`;
    }

    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        "User-Agent": "AnimeVault/1.0", // Required by Shikimori API
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid data format received");
    }

    return data.map((item: AnimeProp, index: number) => (
      <AnimeCard
        key={`${item.id}-${page}-${index}-${genre || "all"}`}
        anime={item}
        index={index}
      />
    ));
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return [];
  }
};

// Fetch genres from Shikimori API
export const fetchGenres = async (): Promise<GenreProp[]> => {
  try {
    const res = await fetch("https://shikimori.one/api/genres", {
      next: { revalidate: 86400 }, // Cache for 24 hours
      headers: {
        "User-Agent": "AnimeVault/1.0",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    // Filter only anime genres
    return data.filter((genre: GenreProp) => genre.kind === "anime");
  } catch (error) {
    console.error("Error fetching genres:", error);
    // Return fallback genres
    return [
      { id: 1, name: "Action", russian: "Экшен", kind: "anime" },
      { id: 2, name: "Adventure", russian: "Приключения", kind: "anime" },
      { id: 3, name: "Comedy", russian: "Комедия", kind: "anime" },
      { id: 4, name: "Drama", russian: "Драма", kind: "anime" },
      { id: 5, name: "Fantasy", russian: "Фэнтези", kind: "anime" },
      { id: 6, name: "Romance", russian: "Романтика", kind: "anime" },
    ];
  }
};

// Get detailed anime information
export const fetchAnimeDetails = async (id: string) => {
  try {
    const res = await fetch(`https://shikimori.one/api/animes/${id}`, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "AnimeVault/1.0",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching anime details:", error);
    return null;
  }
};

// Get streaming services for an anime
export const getStreamingServices = (animeName: string): StreamingService[] => {
  // Create search URLs for popular streaming services
  const services: StreamingService[] = [
    {
      name: "Crunchyroll",
      url: `https://www.crunchyroll.com/search?q=${encodeURIComponent(
        animeName
      )}`,
      logo: "/streaming/crunchyroll.svg",
    },
    {
      name: "Funimation",
      url: `https://www.funimation.com/search/?q=${encodeURIComponent(
        animeName
      )}`,
      logo: "/streaming/funimation.svg",
    },
    {
      name: "Netflix",
      url: `https://www.netflix.com/search?q=${encodeURIComponent(animeName)}`,
      logo: "/streaming/netflix.svg",
    },
    {
      name: "Hulu",
      url: `https://www.hulu.com/search?q=${encodeURIComponent(animeName)}`,
      logo: "/streaming/hulu.svg",
    },
    {
      name: "Amazon Prime",
      url: `https://www.amazon.com/s?k=${encodeURIComponent(
        animeName
      )}&i=instant-video`,
      logo: "/streaming/amazon.svg",
    },
    {
      name: "Wakanim",
      url: `https://www.wakanim.tv/sc/v2/search?q=${encodeURIComponent(
        animeName
      )}`,
      logo: "/streaming/wakanim.svg",
    },
  ];

  return services;
};

// Search anime by query
export const searchAnimes = async (query: string, page: number = 1) => {
  return fetchAnimes(page, undefined, query, "popularity");
};

// Get trending anime
export const fetchTrendingAnimes = async () => {
  return fetchAnimes(1, undefined, undefined, "ranked");
};

// Get anime by specific genre
export const fetchAnimesByGenre = async (genreId: string, page: number = 1) => {
  return fetchAnimes(page, genreId, undefined, "popularity");
};
