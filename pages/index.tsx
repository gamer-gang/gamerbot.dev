import { Button, H1 } from '@blueprintjs/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import ActionBar from '../components/ActionBar'
import AppBar from '../components/AppBar'
import Hero from '../components/Hero'
import Wrapper from '../components/Wrapper'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>gamerbot</title>
      </Head>
      <AppBar />
      <ActionBar />
      <Wrapper page>
        <Hero appBar actionBar>
          <H1 className="mb-4 font-medium">gamerbot</H1>

          <div className="flex">
            <Button
              className="mr-4"
              icon="share"
              intent="primary"
              large
              onClick={() => {
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
        </Hero>
      </Wrapper>
      <footer></footer>
    </>
  )
}

export default Home
