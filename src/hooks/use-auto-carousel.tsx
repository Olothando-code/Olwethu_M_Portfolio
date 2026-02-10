import { useState, useEffect, useCallback } from "react";

export function useAutoCarousel(totalPages: number, intervalMs = 4000) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const timer = setInterval(() => {
      setCurrentPage((p) => (p + 1) % totalPages);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, totalPages, intervalMs]);

  const goTo = useCallback((page: number) => {
    setCurrentPage(page);
    setIsPaused(true);
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => setIsPaused(false), 8000);
  }, []);

  const prev = useCallback(() => {
    setCurrentPage((p) => (p - 1 + totalPages) % totalPages);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  }, [totalPages]);

  const next = useCallback(() => {
    setCurrentPage((p) => (p + 1) % totalPages);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  }, [totalPages]);

  return { currentPage, goTo, prev, next, setIsPaused };
}
