import React, { useEffect, useRef } from 'react';

function Resize2(props) {
  console.log('리사이즈');
  const width = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', () => {
      width.current = window.innerWidth;
      console.log(width.current);
    });
  }, []);

  return <div></div>;
}

export default Resize2;
