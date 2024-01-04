import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    params: { languages: 'en' },
    'X-RapidAPI-Key': '8a398cada9msha379f18c0d677fep13b001jsnbcd8b52a6044',
    'X-RapidAPI-Host': 'news67.p.rapidapi.com'
};

const baseUrl = 'https://news67.p.rapidapi.com/v2/crypto';

const createRequest = (url, params) => ({ url, headers: cryptoNewsHeaders, params });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            // query: ({ count }) => createRequest(`/batchSize${count}`), // Pass count as a query parameter
            query: () => createRequest(``),
    }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
