import Head from "next/head"
import { Circle } from 'better-react-spinkit'

export default function Loading() {
  return (
    <>
    <Head><title>TEN | Loading...</title></Head>
    <Circle size={32} color='var(--darkest-blue)' style={{
            height:'100vh', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} />
    </>
  )
}