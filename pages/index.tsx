import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Introduction from './first-level/Introduction'
import Header from './header/Header'

export default function Home() {
  return (
    <div >
      <Header/>
      <Introduction/>
    </div>
  )
}
