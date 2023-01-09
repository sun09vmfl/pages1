import React, { useEffect, useState } from 'react';

function Resize1() {
  console.log('리사이즈');
  const [width, setWidth] = useState(null);

  //리액트에서는 window객체에서 불러온다면 필수임. 자바스크립트는 빼놔도 ㄱㅊ
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    console.log(width);
  }, [width]);

  return <></>;
}

export default Resize1;
