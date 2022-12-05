import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import SearchArtists from "./components/SearchArtists";
import SearchTracks from "./components/SearchTracks";

const STALE_TIME = 1000 * 60 * 10;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      onError: (err) => {
        console.log("err: ", err);
        window.location.replace("/");
      },
      retry: false,
    },
  },
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const hashToken = window?.location?.hash
      ?.substring(1)
      ?.split("&")
      ?.find((elem) => elem.startsWith("access_token"))
      ?.split("=")[1];

    if (hashToken) {
      setToken(hashToken);
    }
    setIsLoggedIn(Boolean(hashToken));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {isLoggedIn ? (
        <>
          <SearchArtists token={token} />
          <SearchTracks token={token} />
        </>
      ) : (
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${
            import.meta.env.VITE_CLIENT_ID
          }&redirect_uri=${
            import.meta.env.VITE_REDIRECT_URI
          }&response_type=token&scope=user-top-read`}
        >
          LOGIN
        </a>
      )}
    </QueryClientProvider>
  );
};

export default App;
