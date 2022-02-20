import Head from 'next/head'
import {Box, Link, Image, Heading, Text, Flex, Container, useColorMode,} from '@chakra-ui/react'
import fetch from 'isomorphic-unfetch';

export default function Home({ notes}) {
  return (
    <div>
      <Head>
        <title>Word Treasures</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex >
        {notes.map (note =>{
          return(
            <Flex key={note._id}>
                <Link href={`/${note._id}` }>
                    <Text>{note.title}</Text>
                </Link>
          </Flex>
          )



        })



        }
       

      </Flex>
     
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes/')
  const { data } = await res.json()

  return{notes: data}
}
