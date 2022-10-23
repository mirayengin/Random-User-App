import React from 'react'
import {MdMarkEmailUnread} from "react-icons/md"
import {BsFillPhoneVibrateFill} from "react-icons/bs"
import { MdOutlinePlace } from "react-icons/md";




const MyCards = ({item} ) => {
  console.log(item)

  // const [first, last, title] = item.name;

  // console.log(item.email)
  // console.log(item.phone)
  // console.log(item.picture.thumbnail)
  // console.log(first);

  
  return (

    <div className="card bg-info ">
      <div className="card-body " >
      <img src={item.picture.large} className="card-img-top rounded-circle" alt="img" />
        <h5 className="card-title text-center">{item.name.title}.{item.name.first} <span className='ms-1' >{item.name.last}</span></h5></div>
        {/* <h5 className="card-title d-flex d-inline-block">{item.name.title} {item.name.first} {item.name.last}</h5>
      </div> */}

      <div className='d-flex justify-content-center align-items-center'>
        <span className="icon-div w-25  " ><MdMarkEmailUnread size={25}/></span> 
        <p className='w-75 text-end bg-warning text-truncate rounded-3 p-1' >{item.email}</p>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <span className="icon-div w-25  " ><BsFillPhoneVibrateFill size={25}/></span> 
        <p className='w-75 text-end bg-warning rounded-3 p-1' >{item.phone}</p>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <span className="icon-div w-25" ><MdOutlinePlace size={25}/></span> 
        <p className='w-75 text-end bg-warning rounded-3 p-1'>{item.location.city}/{item.location.country }</p>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        {/* <span className="icon-div w-25" ><MdOutlinePlace size={25}/></span>  */}
        <p className='w-75 text-center rounded-3 p-1 fw-bold'>Age: {item.dob.age}</p>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        {/* <span className="icon-div w-25" ><MdOutlinePlace size={25}/></span>  */}
        <p className='w-75 text-center rounded-3 p-1 fw-bold'>Register Date: {new Date (item.registered.date).toLocaleDateString()}</p>
      </div>

    </div>
  );
}

export default MyCards;