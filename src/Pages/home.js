import React, { useEffect, useState } from 'react'
import './home.css'
function Home(props) {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/pizzabungkus/workdb/tipe_badan', {
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
                <img className = "overview-content"
                  src={item.image === undefined || null ? 'https://asset.kompas.com/crops/DN9E0eZyfpbXdkcjNDc4EhXytvc=/65x0:1043x652/750x500/data/photo/2019/12/04/5de7377fa911a.jpg' : item.image}
                  alt="img not found"
                />
              </div>
            )
          })}
    </div>
  )
}

export default Home;