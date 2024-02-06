import React from 'react'
import s from './SideBar.module.scss'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <aside className={s.sidebar}>
      <ul>
        <li>Home</li>
        <li>Create</li>
        <li>My Profile</li>
        <li>Messenger</li>
        <li>Search</li>
      </ul>

      <ul>
        <li>Statistics</li>
        <li>Favorites</li>
      </ul>

      <div>
        Log Out
      </div>
    </aside>
  )
}

export default SideBar