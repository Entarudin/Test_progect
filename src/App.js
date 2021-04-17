import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import Header from "./Componets/header/Header";

import MainContent from "./Componets/mainContent/mainContent";

const arrayBlock = [
  {
    name:  "Одежда",
    model: "Адидас"
  },

  {
    name:  "Обувь",
    model: "Puma"
  },
  {
    name:  "Аксексуары",
    model: "Reebok"
  },
];

function App() {
  const [inputValueSearch,setValue] = useState('');

  const [items,setItems] = useState([]);

  const onItemsSearch = (e) => {
    const {value} = e.target;
    setValue(value);
    const itemsAfterFilter = arrayBlock.filter(({name}) => (

        name.toLowerCase().includes(value.toLowerCase()))


    );

    setItems(itemsAfterFilter);

        console.log(itemsAfterFilter);
  }




  useEffect(()=> {
   setTimeout(() => setItems(arrayBlock),2000)
  }, [])


  return (
    <div className="App">

    <Header
        onChangeValueUser={onItemsSearch}
        inputValueSearch = {inputValueSearch}
    />



    <MainContent arrayBlock = {items} />
    <div style = {{
      display: "flex",
      justifyContent: "center"

    }}>

      {
        items.length === 0 && (
            <div>
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
        )
      }

    </div>



    </div>
  );
}

export default App;
