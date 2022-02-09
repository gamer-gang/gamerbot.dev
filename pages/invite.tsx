import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { INVITE_URL, PUBLIC_URL } from '../util/constants'

const Invite: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = INVITE_URL
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="og:title" content="gamerbot - Invite" />
        <meta name="og:description" content="Invite gamerbot to your server" />
        <meta name="og:image" content={`${PUBLIC_URL}/gamerbot.png`} />
        <meta name="og:url" content={`${PUBLIC_URL}/invite`} />
        <meta name="og:type" content="website" />
      </Head>
    </>
  )
}

export default Invite
