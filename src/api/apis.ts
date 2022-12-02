import axios from "./axios";

import { TimeRange } from "../utils/enums";
import { ArtistResponse, TrackResponse } from "../utils/types";

const apis = {
  getUserTopArtists: (token: string, timeRange: TimeRange) =>
    axios
      .get<ArtistResponse>(`/me/top/artists?limit=10&time_range=${timeRange}`, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => res.data.items),
  getUserTopTracks: (token: string, timeRange: TimeRange) =>
    axios
      .get<TrackResponse>(`/me/top/tracks?limit=10&time_range=${timeRange}`, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => res.data.items),
};

export default apis;
