import React from 'react'

const Dump = (props: any) => (
  <div
    style={{
      fontSize: 10,
      border: '1px solid #efefef',
      padding: 10,
      background: 'white',
    }}>
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: 'white', background: 'red' }}>
          {key} ?
        </strong>
        {JSON.stringify(val, '', ' ')}
      </pre>
    ))}
  </div>
)

export default Dump
