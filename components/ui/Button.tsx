import React from 'react'

type Props = {
    title: string
}

const Button = ({title}: Props) => {
  return (
    <button className="py-1 px-2 text-white rounded-md bg-[#202020]">{title}</button>
  )
}

export default Button