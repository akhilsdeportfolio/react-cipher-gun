import { Button } from 'antd'
import React from 'react'

export default function ReButton({text,onClick,disabled,isLoading,type,...rest}) {
  return (
    <Button disabled={disabled} loading={isLoading} type={type} onClick={onClick} {...rest}>{text}</Button>
  )
}
