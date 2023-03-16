import React from 'react';
import { useState, useEffect } from 'react';

const Contact = () => {
  function list1() {
    console.log('list1');
  }

  useEffect(() => {}, []);

  return (
    <div>
      <div>Contact page</div>
      <button className="h-8 w-20 bg-white" id="btn1">
        {' '}
        click me
      </button>
      <div className="h-64"></div>
      <div className="h-64"></div>
      <div className="h-64"></div>
      <div className="h-64"></div>
      <div className="h-64"></div>
    </div>
  );
};

export default Contact;
