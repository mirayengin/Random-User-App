import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  Mycard  from './Mycard';
import Buton from './Buton';

const Home = () => {
  const url = "https://randomuser.me/api";

  const [person, setPerson] = useState([]);

  const personList = async () => {
    const { data } = await axios.get(url);

    console.log(data)

    setPerson(data.results)
    console.log(data.results);
    console.log(data.results[0]);

  }

  
  useEffect(() => {
    personList()
  
  }, [])
  
  console.log(person);

  return (
    <div className='text-center'>
      {person.map((item, index) => {
        return (<Mycard key={index} item={item} />)
      })}
      <Buton personList={personList} />
    </div>
  )
}

export default Home