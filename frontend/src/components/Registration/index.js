import React from 'react';
import './index.css';

const getAllInfo = () => {
  const ptitle = document.getElementsByClassName('title-input')[0].value;
  const pgroup = document.getElementsByClassName('group-input')[0].value;
  const pdescr = document.getElementsByClassName('description-input')[0].value;

  return { ptitle, pgroup, pdescr };
};

const clearAllInfo = () => {
  document.getElementsByClassName('title-input')[0].value = '';
  document.getElementsByClassName('group-input')[0].value = '';
  document.getElementsByClassName('description-input')[0].value = '';
};

const sendJSONData = async DATA => {
  const rawResponse = await fetch(
    'http://ec2-13-125-111-157.ap-northeast-2.compute.amazonaws.com:4002/api/projects/new',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { title: DATA.ptitle, group: DATA.pgroup, descr: DATA.pdescr },
      }),
    }
  );
  const content = await rawResponse.json();

  console.log(content);
};

const doRegister = () => {
  const Infos = getAllInfo();
  console.log(Infos);

  sendJSONData(Infos);
  window.alert('등록이 완료되었습니다.');
  clearAllInfo();
};

const Registration = () => {
  return (
    <div className="registration-container">
      <div className="form">
        <p className="project-title">Game Title</p>
        <input type="text" className="title-input" />
        <p className="project-group">Group (Organization)</p>
        <input type="text" className="group-input" />
        <p className="project-description">Game Description</p>
        <textarea type="text" className="description-input" />
        <p className="register-wrapper">
          <button className="register-btn" onClick={doRegister}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Registration;
