/* eslint-disable no-void */
import { Button, Navbar } from '@blueprintjs/core'
import { useRouter } from 'next/router'
import React from 'react'
import Wrapper from './Wrapper'

const ActionBar: React.VFC = () => {
  const router = useRouter()

  return (
    <Navbar className="!bg-darkgray-4 h-[30px] sticky top-[50px]">
      <Wrapper childClassName="ml-2">
        <Button
          minimal
          className={`py-0 ${router.pathname === '/' ? 'font-bold' : ''}`}
          onClick={() => void router.push('/')}
        >
          Home
        </Button>
        <Button
          minimal
          className={`py-0 ${router.pathname === '/commands' ? 'font-bold' : ''}`}
          onClick={() => void router.push('/commands')}
        >
          Commands
        </Button>
      </Wrapper>
    </Navbar>
  )
}

export default ActionBar
