import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './planning.css'

function Planning(props) {
  const [data, setData] = useState()
  const {history} = props

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/pizzabungkus/workdb/planning', {
    })
      .then((res) => res.json())
      .then((cats) => {
        setData(cats)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(data)

  return (
    <div className = "player-list">
        <h3> </h3>
      {data === undefined
        ? 'Loading....'
        : data.map((item) => {
            return (
              <div key={item.id}>
                <NavLink to = {`/planningdetail/${item.id}`} onClick ={()=>history.push(`/planningdetail/${item.id}`)}>
                <img className = "imgmax"
                  src={item.image === undefined || null ? 'https://asset.kompas.com/crops/DN9E0eZyfpbXdkcjNDc4EhXytvc=/65x0:1043x652/750x500/data/photo/2019/12/04/5de7377fa911a.jpg' : item.image}
                  alt="img not found"
                />
                <p className = "planning">{item.name}</p>
                </NavLink>
              </div>
            )
          })}
    </div>
  )
}

export default Planning;