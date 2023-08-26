import './App.css'
import * as React from 'react';
import CompareIcon from '@mui/icons-material/Compare';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

function App() {

  function insertOR() {
    var searchText = (document.getElementById('APjFqb') as HTMLInputElement);

      if (searchText) {
        searchText.value += " OR";  
      }
      return;
  }

  function insertMinus() {
    var searchText = (document.getElementById('APjFqb') as HTMLInputElement);

      if (searchText) {
        searchText.value += " -";  
      }
      return;
  }

  return (
    <div className='App'>
      <div>
        <Button startIcon={<CompareIcon/>} onClick={insertOR}/>
        <Button startIcon={<RemoveIcon/>} onClick={insertMinus}/>
      
      </div>

    </div>
  )
}

export default App
