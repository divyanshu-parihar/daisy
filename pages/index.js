import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Split direction='vertical' style={{ height: `calc(100vh - 4rem)` }}>
      <Split className='flex'>
        <div className='bg-gray-300'></div>
        <div className='bg-gray-300'></div>
        <div className='bg-gray-300'></div>
      </Split>
      <div className='bg-gray-400'></div>
    </Split>
  )

}
