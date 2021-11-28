import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './workout.css'

function Workout(props) {
  const [data, setData] = useState()
  const {history} = props

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/pizzabungkus/workdb/workout', {
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
    <div className = "list">
      {data === undefined
        ? 'Loading....' 
        : data.map((item) => {
            return (
              <div key={item.id}>
                <NavLink to = {`/workoutdetail/${item.id}`} onClick ={()=>history.push(`/workoutdetail/${item.id}`)}>
                <img className = "breeds-img"
                  src={item.image === undefined || null ? 'https://asset.kompas.com/crops/DN9E0eZyfpbXdkcjNDc4EhXytvc=/65x0:1043x652/750x500/data/photo/2019/12/04/5de7377fa911a.jpg' : item.image}
                  alt="img not found"
                />
                <p className = "breed-name">{item.name}</p>
                </NavLink>
              </div>
            )
          })}
    </div>
  )
}

export default Workout;