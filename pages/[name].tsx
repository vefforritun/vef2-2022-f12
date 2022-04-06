import { NextPage, GetServerSidePropsContext, GetStaticPropsContext } from "next";
import Head from 'next/head';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
  name: string;
}

const Home: NextPage = ({ name: initialName }: Props) => {
  const [name, setName] = useState<string>(initialName);
  
  useEffect(() => {
    setName(name + '!!!')
  }, [])


  return (
    <>
      <Head>
        <title>About {name}</title>
      </Head>
      <p>hello {name}</p>
      <Link href="/"><a>Home</a></Link>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: 'asdf' } }
    ],
    fallback: false // false or 'blocking'
  };
}


export async function getStaticProps(context: GetStaticPropsContext) {
  const name = context.params?.name ?? '-'

  // const response = await fetch('...');
/* 
  return {
    notFound: true,
    props: {},
  } */

  return {
    props: { name }, // will be passed to the page component as props
  }
}


export default Home
