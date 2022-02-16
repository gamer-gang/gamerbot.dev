/// <reference types="gamerbot-types" />
import { H1, Tag } from '@blueprintjs/core'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import type { DocsJson } from 'src/types'
import ActionBar from '../components/ActionBar'
import AppBar from '../components/AppBar'
import CommandEntry from '../components/CommandEntry'
import Wrapper from '../components/Wrapper'
import { DOCS_BASE, PUBLIC_URL } from '../util/constants'

interface CommandsProps {
  data: DocsJson
}

export const getStaticProps: GetStaticProps<CommandsProps> = async (context) => {
  const latest = await fetch(`${DOCS_BASE}/latest.json`)
  const docs = await fetch(`${DOCS_BASE}/${await latest.text()}`)

  return {
    props: {
      data: (await docs.json()) as DocsJson,
    },
  }
}

const Commands: NextPage<CommandsProps> = ({ data }) => {
  const commands = [...data.commands].sort((a, b) => a.name.localeCompare(b.name))
  return (
    <>
      <Head>
        <title>gamerbot - Commands</title>
        <meta
          name="description"
          content="A general-purpose, open-source Discord bot built with Node.js + TypeScript - Commands reference"
        />
        <meta name="og:title" content="gamerbot - Commands" />
        <meta
          name="og:description"
          content="A general-purpose, open-source Discord bot built with Node.js + TypeScript - Commands reference"
        />
        <meta name="og:image" content={`${PUBLIC_URL}/gamerbot.png`} />
        <meta name="og:url" content={`${PUBLIC_URL}/commands`} />
        <meta name="og:type" content="website" />
      </Head>
      <AppBar />
      <ActionBar />
      <Wrapper page>
        <H1 className="mb-8">Commands</H1>
        <span className="mx-auto mb-1 text-lg font-bold text-center">Goto:</span>
        <div className="flex flex-wrap items-center justify-center max-w-3xl mx-auto mb-8">
          {commands.map((command, i) => (
            <a key={i} href={`#command-${command.name}`} className="inline-flex items-center mr-4">
              {command.type === 'CHAT_INPUT' ? (
                `/${command.name}`
              ) : (
                <>
                  <Tag minimal round className="mr-1">
                    {command.type[0]}
                  </Tag>
                  {command.name}
                </>
              )}
            </a>
          ))}
        </div>
        <hr className="my-8 border-gray-1" />
        {commands.map((command, i) => (
          <React.Fragment key={i}>
            <CommandEntry version={data.version} command={command} className="mb-8" />
            {i !== commands.length - 1 && <hr className="my-8 border-gray-1" />}
          </React.Fragment>
        ))}
      </Wrapper>
    </>
  )
}

export default Commands
