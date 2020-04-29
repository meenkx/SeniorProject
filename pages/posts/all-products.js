import Head from 'next/head'
import Link from 'next/link'

export default function AllProducts() {
    return (
      <div className="container">
        <Head>
        <title>All Products</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        <h1 className="title">
        ผลิตภัณฑ์ทั้งหมด 
        </h1>
        <h2>
          <Link href="/">
            <a> Back to home page </a>
          </Link>
        </h2>
          
          </main>
    
        
        </div>
    
    )
  }