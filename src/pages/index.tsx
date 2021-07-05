/* eslint-disable @next/next/no-img-element */
import { Button } from '../components/Button'
import { Title } from '../components/Title'
import { Header } from '../components/Header'
import { AboutIllustration } from '../components/AboutIllustration'
import { Card } from '../components/Card'

import { FaKey } from 'react-icons/fa'

import styles from '../styles/Landing.module.scss'
import { theme } from '../theme'
import { SocialLoginButton } from '../components/SocialLogin'
import { useAuth } from '../hooks/useAuth'

export default function Landing() {
  const { signInWithGoogle } = useAuth()

  function handleLogin() {
    signInWithGoogle()
  }

  return (
    <main className={styles.appContainer}>
      <Header />

      <section id='#home'>
        <div className={styles.meetingImage}>
          <img
            src='./images/Meeting.jpg'
            alt='Imagem representando uma reunião'
          />
          <div>
            <h1>Ajudando Empresas</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Integer iaculis vulputate <br />
              hendrerit orci, morbi vulputate pellentesque <br />
              volutpat, netus. Nam et purus at blandit <br />
              viverra nulla sed pharetra amet.
            </p>
            <Button />
          </div>
        </div>
      </section>

      <Title
        sectionName='Sobre nós'
        containerStyles={{ marginTop: '4.563rem' }}
      >
        <h2>
          Quem somos nós?
        </h2>
      </Title>

      <section id='#about' className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Aliquam maecenas velit sit arcu, <br />
            velit nibh integer. Urna, sit tellus amet sed aliquet nunc, <br />
            risus, tellus. Fermentum et pharetra elit sed. <br />
            Elit sit faucibus rhoncus pellentesque quam arcu a eleifend nulla. <br />
            Congue feugiat at tincidunt odio integer non, justo, massa <br />
            sit. Quis convallis id mattis donec magna at. <br />
            Dictumst risus, aliquam in maecenas tempor.
          </p>
          <AboutIllustration />
        </div>

        <Title
          sectionName='Sobre nós'
          containerStyles={{ marginTop: '4.563rem' }}
        >
          <h2
            style={{
              textAlign: 'center'
            }}
          >
            O que fazemos <br />
            para Ajudar
          </h2>

          <p
            style={{
              marginTop: '25px',
              color: theme.colors.heading
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Title>

        <div className={styles.cardWrapper}>
          <Card
            title='Segurança'
            icon={
              <FaKey size={24} color={theme.colors.primary} />
            }
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida nec rhoncus quam blandit felis non est suspendisse vel. Netus a in porta amet ac platea. Urna libero cursus mattis malesuada tempor, sed ut et.'
          />
          <Card
            title='Segurança'
            icon={
              <FaKey size={24} color={theme.colors.primary} />
            }
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida nec rhoncus quam blandit felis non est suspendisse vel. Netus a in porta amet ac platea. Urna libero cursus mattis malesuada tempor, sed ut et.'
          />
          <Card
            title='Segurança'
            icon={
              <FaKey size={24} color={theme.colors.primary} />
            }
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida nec rhoncus quam blandit felis non est suspendisse vel. Netus a in porta amet ac platea. Urna libero cursus mattis malesuada tempor, sed ut et.'
          />
        </div>
        <Title
          sectionName='Contato'
          containerStyles={{ marginTop: '4.563rem' }}
        >
          <h2
            style={{
              textAlign: 'center'
            }}
          >
            Entre em contato <br />
            conosco
          </h2>

          <p
            style={{
              marginTop: '25px',
              color: theme.colors.heading
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Title>

        <div className={styles.socialLoginButtonWrapper}>
          <SocialLoginButton  onClick={handleLogin} provider='google'/>
          <SocialLoginButton  provider='facebook'/>
          <SocialLoginButton  provider='microsoft'/>
        </div>
      </section>
    </main>
  )
}