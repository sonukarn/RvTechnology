// src/hooks/useRestoreScrollOnRefresh.js
import { useEffect } from "react";

export default function useRestoreScrollOnRefresh() {
  useEffect(() => {
    const KEY_Y = "savedScrollY";
    const KEY_PATH = "savedScrollPath";

    // Restore logic (retries until success or attempts exhausted)
    const savedY = sessionStorage.getItem(KEY_Y);
    const savedPath = sessionStorage.getItem(KEY_PATH);
    const shouldRestore =
      savedY !== null && savedPath === window.location.pathname;

    let canceled = false;
    let attempts = 0;
    const MAX_ATTEMPTS = 60; // ~3s (60 * ~50ms)
    const TARGET_Y = savedY ? parseInt(savedY, 10) : 0;
    const TOLERANCE = 3; // pixels

    const tryRestore = () => {
      if (canceled) return;
      attempts++;
      window.scrollTo(0, TARGET_Y);

      // If not within tolerance and we haven't exhausted attempts, retry
      if (
        Math.abs(window.scrollY - TARGET_Y) > TOLERANCE &&
        attempts < MAX_ATTEMPTS
      ) {
        // try again next frame after small delay (gives time for layout/images)
        requestAnimationFrame(() => setTimeout(tryRestore, 50));
      } else {
        // done (either success or exhausted)
        // optional: cleanup saved keys so future visits don't wrongly restore
        // sessionStorage.removeItem(KEY_Y);
        // sessionStorage.removeItem(KEY_PATH);
      }
    };

    if (shouldRestore) {
      // Try once after the full window 'load' (fires after images/fonts)
      window.addEventListener(
        "load",
        () => {
          // small delay to let React finish any final painting
          setTimeout(() => {
            tryRestore();
          }, 0);
        },
        { once: true }
      );

      // Also attempt after first paint (covers cases where 'load' already fired)
      requestAnimationFrame(() => setTimeout(tryRestore, 0));
    }

    // Save scroll before unload (refresh/close)
    const save = () => {
      sessionStorage.setItem(KEY_Y, String(window.scrollY));
      sessionStorage.setItem(KEY_PATH, window.location.pathname);
    };
    window.addEventListener("beforeunload", save);

    // Cleanup
    return () => {
      canceled = true;
      window.removeEventListener("beforeunload", save);
    };
  }, []);
}
