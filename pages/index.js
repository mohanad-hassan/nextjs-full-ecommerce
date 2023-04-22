import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
import axios from 'axios'
import { useSession,signIn,signOut } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ country }) {
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
   <Header country={country}></Header>
   <Footer></Footer>
      <main className={styles.main}>
        <h1>welcome From Test</h1>
        <button onClick={signIn}>sign in </button>
        <button onClick={signOut}>sign out </button>
      </main>
    </>
  )
}


export async function getServerSideProps() {

  let data = await axios.get("https://api.ipregistry.co/?key=pguagja91xinlo2p").then((res) => {
    return res.data.location.country;
  })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
     
    },
  }
}
  

