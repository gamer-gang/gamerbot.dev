import { Button, Navbar, Tag } from '@blueprintjs/core'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { DOCS_BASE } from '../util/constants'
import Wrapper from './Wrapper'

let cachedVersion = 'latest'

const AppBar: React.VFC = () => {
  const router = useRouter()
  const [version, setVersion] = React.useState(cachedVersion)
  const [inviteLoading, setInviteLoading] = React.useState(false)

  useEffect(() => {
    if (version !== 'latest') return

    const fetchVersion = async (): Promise<void> => {
      const latest = await fetch(`${DOCS_BASE}/latest.json`)
      cachedVersion = 'v' + (await latest.text()).replace(/\.json$/, '')
      setVersion(cachedVersion)
    }

    void fetchVersion()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Navbar className="!shadow-none sticky top-0 tracking-wide">
      <Wrapper className="mx-auto">
        <Navbar.Group align="left" className="flex items-center">
          <Image
            src="/gamerbot.svg"
            width={32}
            height={32}
            className="rounded-full"
            alt="gamerbot logo"
          />
          <Navbar.Heading className="mb-0 ml-2 text-lg font-semibold">gamerbot</Navbar.Heading>
          <Tag intent="primary" round minimal>
            {version}
          </Tag>
        </Navbar.Group>
        <Navbar.Group align="right">
          <Button
            loading={inviteLoading}
            rightIcon="share"
            intent="primary"
            onClick={() => {
              setInviteLoading(true)
              void router.push('/invite')
            }}
          >
            Invite
          </Button>
        </Navbar.Group>
      </Wrapper>
    </Navbar>
  )
}

export default AppBar
