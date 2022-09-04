import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="flex flex-wrap justify-center bg-blue-200 gap-5 ">
      <Card tablenum="1"/>
      <Card tablenum="2"/>
      <Card tablenum="3"/>
    </div>
  );
}

export default App;