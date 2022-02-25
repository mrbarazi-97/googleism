import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import SearchResults from '../components/SearchResults.js';
import { API_KEY, CONTEXT_KEY } from '../keys.js';
import Header from './../components/Header.js';
import Response from './../Response';

export default function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header />
      {/*Result*/}
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // after the server has render pass the results to the client
  return {
    props: {
      results: data,
    },
  };
}
