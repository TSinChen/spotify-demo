import { useState } from "react";
import { useQuery } from "react-query";
import { Tabs, Tab } from "@mui/material";

import api from "../api/apis";
import { TimeRange } from "../utils/enums";

type Props = {
  token: string;
};

const STALE_TIME = 1000 * 60 * 10;

const SearchArtists = ({ token }: Props) => {
  const [timeRange, setTimeRange] = useState(TimeRange.short);

  const { data: artistList } = useQuery(
    ["artists", token, timeRange],
    () => api.getUserTopArtists(token, timeRange),
    { enabled: Boolean(token), staleTime: STALE_TIME }
  );

  return (
    <div>
      <Tabs value={timeRange} onChange={(_, v) => setTimeRange(v)}>
        {Object.values(TimeRange).map((range) => (
          <Tab key={range} label={range} value={range} />
        ))}
      </Tabs>
      <ol>
        {artistList?.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default SearchArtists;
