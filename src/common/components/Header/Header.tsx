import React from 'react'
import style from './Header.module.scss'
import Link from 'next/link'
import {Button} from '../ui/Button/Button'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={style.header}>
      <nav>
        <Link href={'/'}>
          Inctagram
        </Link>
        <ul>
          <li>
            <select>
              <option value="English">English</option>
              <option value="Russia">Russia</option>
            </select>
          </li>
          <li>
            <Button variant="link">Log In</Button>
          </li>
          <li>
            <Button>Sign Up</Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header