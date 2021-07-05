/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

import { FcGoogle } from 'react-icons/fc'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { ButtonHTMLAttributes } from 'react'

interface SocialLoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'microsoft' | 'google' | 'facebook'
}

function SocialIcon({ provider }: SocialLoginButtonProps) {
  return (
    <>
      { provider === 'google' ? (
        <FcGoogle size={24}/>
      ) : (
        <>
          { provider === 'facebook' ? (
            <RiFacebookCircleFill size={24} color='#1877F2'/>
          ) : (
            <img src="./icons/microsoft.svg" alt="Logo da Microsoft"/>
          )}
        </>
      )}
    </>
  )
}

export function SocialLoginButton({ provider, ...rest }: SocialLoginButtonProps) {

  return (
    <div className={styles.container}>
      <button {...rest}>
        <div>
          <SocialIcon provider={provider} />
        </div>
        <span>
          { provider === 'facebook' && 'Login com o Facebook' }
          { provider === 'google' && 'Login com o Google' }
          { provider === 'microsoft' && 'Login com o microsoft' }
        </span>
        <div></div>
      </button>
    </div>
  )
}