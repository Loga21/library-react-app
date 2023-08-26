import React from 'react';
import '../styles/Head-Foot.css';

export default function Footer() {
  const owner = 'Loga';
  return (
    <div className='foot'>
      <p>Library app 2023 &copy; {owner}</p>
    </div>
  );
}
