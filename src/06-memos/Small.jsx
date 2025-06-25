import React, { memo } from 'react'

export const Small = memo(({value}) => {

console.log('me volvi a redibujar')
  return (
    <div>{value}</div>
  )
})
