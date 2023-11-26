// components/Layout.tsx
"use client";
import { useEffect } from 'react';

function Theme({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function syncThemeWithBrowserPreference() {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    
    // Call the syncThemeWithBrowserPreference function initially
    syncThemeWithBrowserPreference();

    // Add an event listener to react to changes in the user's preferred color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addListener(syncThemeWithBrowserPreference);

    // Return a cleanup function to remove the event listener when the component unmounts
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeListener(syncThemeWithBrowserPreference);
    };
  }, []);

  return <div className="min-h-screen flex flex-col">{children}</div>;
}

export default Theme;
