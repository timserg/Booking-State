import React, { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

const socket = new WebSocket('ws://192.168.1.157:3001');

function Chat() {
  const [val, setVal] = useState('');
  const [mess, setMess] = useState([]);
  const { authuser } = useSelector((s) => s);

  useEffect(() => {
    socket.onopen = (e) => {
      console.log('connection');
    };

    socket.onmessage = (event) => {
      console.log(event.data, '====');
      const comment = JSON.parse(event.data);
      console.log(comment);
      setMess((prev) => [...prev, comment]);
    };

    socket.onclose = function (event) {
      console.log('closed');
    };
    // return () => {} close connection
  }, []);

  return (
    <div className="chat">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          socket.send(
            JSON.stringify({ type: 'formData', payload: [val, authuser.name] })
          );
          console.log('submit');
          setVal('');
        }}
      >
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
      {mess.map((el) => (
        <div className="messItem">
          <div className="userMess">{el[1]}: </div>
          <div className="messMess">{el[0]}</div>
        </div>
      ))}
    </div>
  );
}

export default Chat;
