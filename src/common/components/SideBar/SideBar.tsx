import React, { useState } from 'react'
import s from './SideBar.module.scss'
import DialogModal from '../ui/Dialog/Dialog'

type Props = {}

const SideBar = (props: Props) => {
  const [child, setChild] = useState(false)
  return (
    <aside className={s.sidebar}>
      <ul>
        <li>Home</li>
        <li>
          <DialogModal />
        </li>
        <li>My Profile</li>
        <li>Messenger</li>
        <li>Search</li>
      </ul>

      <ul>
        <li>Statistics</li>
        <li>Favorites</li>
      </ul>

      <div>Log Out</div>
    </aside>
  )
}

export default SideBar
