export type TopItemResponse<T> = {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type Artist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
};

export type ArtistResponse = TopItemResponse<Artist>;

export type Track = {
  album: {
    album_type: "ALBUM" | "SINGLE" | "COMPILATION";
    artists: [
      {
        external_urls: {
          [key: string]: string;
        };
        href: string;
        id: string;
        name: string;
        type: "artist";
        uri: string;
      }
    ];
    available_markets: string[];
    external_urls: {
      [key: string]: string;
    };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    total_tracks: number;
    type: "album";
    uri: string;
  };
  artists: [
    {
      external_urls: {
        [key: string]: string;
      };
      href: string;
      id: string;
      name: string;
      type: "artist";
      uri: string;
    }
  ];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    [key: string]: string;
  };
  external_urls: {
    [key: string]: string;
  };
  href: string;
  id: string;
  is_local: false;
  name: string;
  popularity: 18;
  preview_url: string;
  track_number: 11;
  type: "track";
  uri: string;
};

export type TrackResponse = TopItemResponse<Track>;
