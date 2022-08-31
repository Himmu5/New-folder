import React from 'react'
import AllContant from './AllContant'
import { data } from './Data'

export default function MainContant() {

  return (
    <div>
        <AllContant products={data}/>
    </div>
  )
}
