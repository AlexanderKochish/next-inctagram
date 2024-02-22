import React, { ReactElement, ReactNode } from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <SideBar />
      <main>{children}</main>
    </>
  )
}

export default Layout

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
