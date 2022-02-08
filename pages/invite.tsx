import { GetServerSideProps, NextPage } from 'next'

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    redirect: {
      destination:
        'https://discord.com/oauth2/authorize?client_id=939720610429419521&permissions=3702844670&scope=applications.commands+bot',
      permanent: false,
    },
  }
}

const Invite: NextPage = () => {
  return <></>
}

export default Invite
