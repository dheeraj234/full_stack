import React from 'react'
import { useLocation } from 'react-router-dom';
import { Preview,print } from 'react-html2pdf';
import Axios from 'axios';

const Display = () => {
    let {search}= useLocation();
    let params = new URLSearchParams(search);
    const name=params.get('name');
    const email=params.get('email');
    const age=params.get('age');

  Axios.post("http://localhost:3001/api/insert",{Name:name,Email:email,Age:age}).then(()=>{alert("successfully insert")});

  return (
      <div>
          <center>
              {/* <div id="file">
              <div>Name: {params.get('name')}</div>
              <div>Email: {params.get('email')}</div>
              <div>Age: {params.get('age')}</div>
              <button id='download' onClick={downloadPdf}>download pdf</button>
              </div> */}
            <Preview id={'jsx-template'} >
                <center>
                <div>Name: {name}</div>
              <div>Email: {email}</div>
              <div>Age: {age}</div>
                </center>
              </Preview>
              <button onClick={()=>print('a', 'jsx-template')}> print</button>
          </center>
      </div>
  );
}

export default Display