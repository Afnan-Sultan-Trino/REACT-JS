import React from 'react'

export default function Child(props) {

  const dataChild="I am from Child Component"
  props.onChildData(dataChild)

  return (
    <div>
      <h1>I am CHILD</h1>
      <p>{props.data}</p>    (//using props for passing data from parent to child )
    </div>
  )
}
