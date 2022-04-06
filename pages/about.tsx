import { NextPage } from "next";
import Head from 'next/head';
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <p>hello world</p>
      <Link href="/">Home</Link>
    </>
  );
}

export default Home
