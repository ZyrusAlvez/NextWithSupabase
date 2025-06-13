import React from 'react'

type Props = {
  title?: string;
  onClick?: ((e: React.FormEvent) => void) | (() => void);
};

const Button = ({title, onClick}: Props) => {
  return (
    <button onClick={onClick} className="py-1 px-2 text-white rounded-md bg-[#202020]">{title}</button>
  )
}

export default Button