import { useState } from "react";
import { useQuery } from "react-query";
import { Tabs, Tab } from "@mui/material";

import api from "../api/apis";
import { TimeRange } from "../utils/enums";

type Props = {
  token: string;
};

const STALE_TIME = 1000 * 60 * 10;

const SearchTracks = ({ token }: Props) => {
  const [timeRange, setTimeRange] = useState(TimeRange.short);

  const { data: trackList } = useQuery(
    ["tracks", token, timeRange],
    () => api.getUserTopTracks(token, timeRange),
    {
      enabled: Boolean(token),
      staleTime: STALE_TIME,
      onError: () => window.location.replace("/"),
    }
  );

  return (
    <div>
      <Tabs value={timeRange} onChange={(_, v) => setTimeRange(v)}>
        {Object.values(TimeRange).map((range) => (
          <Tab key={range} label={range} value={range} />
        ))}
      </Tabs>
      <ol>
        {trackList?.map((track) => (
          <li key={track.id}>
            {track.artists.map((artist) => artist.name).join(", ")} -{" "}
            {track.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchTracks;
