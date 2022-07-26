import React, { useEffect } from 'react';
import './Bookings.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../Redux/action';

function Bookings() {
  const dispatch = useDispatch()
  const { booking } = useSelector(s => s);

  useEffect(() => {
    dispatch(getAllBooks())
  },[])


  return (
    <>    
    <h1>Timetable bookings</h1>
    <div className='Schedule'>
      <div className='Room'>
        <h2>{'<'}TYPESCRIPT{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 1))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}PHASE 3{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 2))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}ГАРДЕРОБ{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 3))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>
      
      <div className='Room'>
        <h2>{'<'}ДИВАН{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 4))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}RUST{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 5))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div> 

      <div className='Room'>
        <h2>{'<'}ГАРДЕРОБ{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 6))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}PHASE 2{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 7))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}КУХНЯ{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 8))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>
      
      <div className='Room'>
        <h2>{'<'}ДИВАН{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 9))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}ШАБЛИ{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 10))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div> 

      <div className='Room'>
        <h2>{'<'}ПРЕПОДАВАТЕЛЬСКАЯ{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 11))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}KOTLIN{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 12))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}PYTHON{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 13))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>
      
      <div className='Room'>
        <h2>{'<'}ASSEMBLER{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 14))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}КУХНЯ{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 15))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}RUBY{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 16))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>
      
      <div className='Room'>
        <h2>{'<'}GOLANG{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 17))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>

      <div className='Room'>
        <h2>{'<'}КУХНЯ{'>'}</h2>
        <hr /> <br />
        {booking.filter(el => (el.room_id === 18))
          .map(el => 
            <div key={el.id}> 
                <p>{el.Day.day}</p>
                <p>{el.time_start} - {el.time_end}</p>
                <p>{el.Type.type}</p>
                <p>{el.comment}</p>
                <h3>{el.User.name}</h3>
                <p>===================</p>
            </div>          
          )
        }       
      </div>


    </div>  
    </>  
  )
}
      
export default Bookings;
