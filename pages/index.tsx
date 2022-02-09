import { AnchorButton, Button, H1 } from '@blueprintjs/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import ActionBar from '../components/ActionBar'
import AppBar from '../components/AppBar'
import Hero from '../components/Hero'
import Wrapper from '../components/Wrapper'
import { PUBLIC_URL, REPO_URL } from '../util/constants'

const Home: NextPage = () => {
  const router = useRouter()
  const [inviteLoading, setInviteLoading] = React.useState(false)

  return (
    <>
      <Head>
        <title>gamerbot</title>
        <meta name="og:title" content="gamerbot" />
        <meta
          name="og:description"
          content="A general-purpose, open-source Discord bot built with Node.js + TypeScript"
        />
        <meta name="og:image" content={`${PUBLIC_URL}/gamerbot.png`} />
        <meta name="og:url" content={PUBLIC_URL} />
        <meta name="og:type" content="website" />
      </Head>
      <AppBar />
      <ActionBar />
      <Wrapper page>
        <Hero appBar actionBar>
          <H1 className="mb-4 font-medium">gamerbot</H1>

          <div className="flex mb-4">
            <Button
              loading={inviteLoading}
              className="mr-4"
              rightIcon="share"
              intent="primary"
              large
              onClick={() => {
                setInviteLoading(true)
                void router.push('/invite')
              }}
            >
              Invite
            </Button>

            <Button
              className=""
              intent="primary"
              outlined
              large
              onClick={() => {
                void router.push('/commands')
              }}
            >
              Commands
            </Button>
          </div>
          <AnchorButton
            intent="primary"
            icon="git-branch"
            outlined
            large
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </AnchorButton>
        </Hero>
      </Wrapper>
      <footer></footer>
    </>
  )
}

export default Home
