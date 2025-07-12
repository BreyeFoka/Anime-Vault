"use client";

import { fetchAnimes } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimeCard from "./AnimeCard";

let page = 2;
export type AnimeCard = JSX.Element;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      fetchAnimes(page)
        .then((res) => {
          setData([...data, ...res]);
          page++;
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [inView, data, isLoading]);

  return (
    <>
      {/* Additional Anime Grid */}
      {data.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
        >
          {data}
        </motion.section>
      )}

      {/* Loading Indicator */}
      <section className="flex justify-center items-center py-12">
        <div ref={ref} className="flex flex-col items-center space-y-4">
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Image
                src="/spinner.svg"
                alt="Loading more anime..."
                width={48}
                height={48}
                className="object-contain"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-gray-700/50"
            >
              <Image
                src="/spinner.svg"
                alt="Scroll for more"
                width={40}
                height={40}
                className="object-contain opacity-50"
              />
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-sm text-center"
          >
            {isLoading ? "Loading more anime..." : "Scroll down for more"}
          </motion.p>
        </div>
      </section>
    </>
  );
}

export default LoadMore;
