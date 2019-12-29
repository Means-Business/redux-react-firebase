import React, { useState } from 'react';

import { Toast } from 'react-bootstrap';
import logo from '../../bunchee-online-logo2.svg';

const MyAlert = props => {
  console.log(props);
  const { alert } = props;
  console.log(alert);
  const [show, setShow] = useState(true);

  var timeleft = 5;
  var downloadTimer = setInterval(function() {
    document.getElementById(
      'countdown'
    ).innerHTML = `โปรดกรอกข้อมูลใหม่ใน ${timeleft} วินาที`;
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById('countdown').innerHTML = 'ล้างข้อมูลอัตโนมัติ';
      window.location.reload();
    }
  }, 1000);

  function handleClose() {
    setShow(!show);
    window.location.reload();
  }

  return (
    <Toast show={show} onClose={handleClose}>
      <Toast.Header>
        <img
          width="15"
          height="15"
          src={logo}
          className="rounded mr-2"
          alt="moocoding"
        />
        <strong className="mr-auto">ข้อความ</strong>
        <small>ปิด</small>
      </Toast.Header>
      <Toast.Body>
        <div className={`alert ${alert.type}`} role="alert">
          {alert.message}
        </div>
        <div id="countdown"></div>
      </Toast.Body>
    </Toast>
  );
};

export default MyAlert;
