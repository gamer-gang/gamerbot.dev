import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  if (!process.env.INVITE_URL) {
    throw new Error('Missing INVITE_URL environment variable')
  }

  return {
    redirect: {
      destination: process.env.INVITE_URL,
      permanent: false,
    },
  }
}

const Invite: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="og:title" content="gamerbot - Invite" />
        <meta name="og:description" content="Invite gamerbot to your server" />
        <meta name="og:image" content={`${process.env.PUBLIC_URL}/gamerbot.png`} />
        <meta name="og:url" content={`${process.env.PUBLIC_URL}/invite`} />
        <meta name="og:type" content="website" />
      </Head>
    </>
  )
}

export default Invite
