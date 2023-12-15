import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'c02ece22famshaa1b5a2efcbe08fp1f6662jsn4d61eaeaf290',
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
