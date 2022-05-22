import React from 'react'
import { ContainerSC, TitleSC } from './headerStyles'

interface HeaderProps {
  title: string
}

export const Header = (props: HeaderProps) => {
  return (
    <ContainerSC>
       <TitleSC>{props.title}</TitleSC>
    </ContainerSC>
  )
}
