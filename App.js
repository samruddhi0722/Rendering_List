import React from 'react';

function ListComponent() {
  // Example list of itemsnm 
  const items = ['HTML', 'CSS', 'JavaScript','React JS', 'Python'];

  return (
    <div>
      <h1>List Component</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;
