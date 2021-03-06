import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from "./Button"

const Header = ({ title, onAdd, showAdd}) => {

  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button
        text={showAdd ? 'Close' : 'Add'}
        color={showAdd ? 'red' : 'green'}
        onClick={onAdd}
      />}
    </header>
  )
}
Header.defaultProps = {
  title: 'Task tracker'
}

export default Header