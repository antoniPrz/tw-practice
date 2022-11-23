import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { YoutubeForm } from './components/YoutubeForm';
import { FieldForm } from './components/FieldForm';
import FormikContainer from './components/FormikContainer';

function App() {
  return (
    <div className='App'>
      <FormikContainer />
    </div>
  );
}

export default App;
