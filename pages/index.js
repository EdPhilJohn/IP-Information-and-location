import Head from 'next/head'
import IPApi from './ipinfo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div>
         <IPApi/>
    </div>
  )
}
