import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AltHero } from '@/components/AltHero'
import { PageTitle } from '@/components/PageTitle'
import { ItemList2 } from '@/components/ItemList2'

export default function Museum() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <PageTitle />
        <ItemList2 />
      </main>
      <Footer />
    </>
  )
}
