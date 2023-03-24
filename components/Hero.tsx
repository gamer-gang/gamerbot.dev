import { PropsWithChildren } from 'react'
import styles from '../styles/util.module.scss'

interface HeroProps extends PropsWithChildren {
  appBar?: boolean
  actionBar?: boolean
}

const Hero = ({ appBar = false, actionBar = false, children }: HeroProps): JSX.Element => {
  return (
    <section
      className={`flex flex-col items-center justify-center w-full ${styles.hero} -mt-4 ${
        appBar ? styles['has-app-bar'] : ''
      } ${actionBar ? styles['has-action-bar'] : ''}`}
    >
      {children}
    </section>
  )
}

export default Hero
