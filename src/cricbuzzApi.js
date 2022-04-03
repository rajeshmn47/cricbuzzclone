import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cricbuzzApiHeaders = {
  'x-rapidapi-key':'unofficial-cricbuzz.p.rapidapi.com',
  'x-rapidapi-host':'3ddef92f6emsh8301b1a8e1fd478p15bb8bjsnd0bb5446cadc',
};
const live='live'

const createRequest = (url) => ({ url, headers: cricbuzzApiHeaders });

export const cricbuzzApi = createApi({
  reducerPath: 'cricbuzzApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://unofficial-cricbuzz.p.rapidapi.com',
}),
  endpoints: (builder) => ({
    getMatches: builder.query({
      query: () => createRequest(`matches/list/?matchState='live'`),
    }),
    getMatchDetails: builder.query({
      query: () => createRequest(`matches/get-scorecard?matchId=40381`),
    }),
    getMatchScorecard: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
  }),
});

export const { useGetMatchesQuery, useGetMatchDetailsQuery,useGetMatchScorecardQuery } = cricbuzzApi;
