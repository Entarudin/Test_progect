import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'

import Bucket from "./pages/bucket/Bucket";
import Header from "./Componets/header/Header";

import MainContent from "./Componets/mainContent/mainContent";


const arrayBlock = [
  {
    id : '123213',
    name:  "Одежда",
    model: "Адидас",
    link: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8ad17a46926943bea397abfb00d3c31c_9366/Vysokie_krossovki_EQT_Bask_ADV_chernyj_FZ0043_01_standard.jpg",
    amount:14
  },

  {
    id: '323232424',
    name:  "Обувь",
    model: "Puma",
    link: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8ad17a46926943bea397abfb00d3c31c_9366/Vysokie_krossovki_EQT_Bask_ADV_chernyj_FZ0043_01_standard.jpg",
    amount:15
  },
  {
    id : "1231232323",
    name:  "Аксексуары",
    model: "Reebok",
    link: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8ad17a46926943bea397abfb00d3c31c_9366/Vysokie_krossovki_EQT_Bask_ADV_chernyj_FZ0043_01_standard.jpg",
    amount:2
  },
  {
    id: Math.random(1000),
    name:  "Аксексуары",
    model: "Reebok",
    link: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8ad17a46926943bea397abfb00d3c31c_9366/Vysokie_krossovki_EQT_Bask_ADV_chernyj_FZ0043_01_standard.jpg",
    amount:0
  },
];


function App() {
  const [inputValueSearch,setValue] = useState('');

  const [items,setItems] = useState([]);

  const [bucketitems, setBucketItems] = useState([]);

  const addItemForBucket = (itemId) =>{

  const itemForBucket = items.find(({id}) =>id ===itemId);

 const isitemInBucket = bucketitems.find(({id}) =>id ===itemId);

 if (isitemInBucket) {
     
      const itemsForBucket = bucketitems.map((item) => {
          if (item.id === itemId){
      
            return {
              ...item,
              amount: item.amount + 1
            }
      
          }
          return item
        });

        setBucketItems(itemsForBucket);

      } else{
        setBucketItems((prevState) => [...prevState, {...itemForBucket, amount: 1 }])
      }
        
  };
  

  const addItemsToBucket = (id) => {
      console.log(id)

      const filteredItems = items.map((item ) => {
          if (item.id ===id){
          
            return{
              ...item,
              amount: item.amount - 1
            }

          }
          return item
      })
      setItems(filteredItems);


      addItemForBucket(id)
  }




 





   

  
const deleteItemFromBucket = (itemId ) => {

  console.log('deleteItemFromBucket id' , itemId);
  const filteredItemsForMainPage = items.map((item ) => {
    if (item.id === itemId){
  
      return {
        ...item,
        amount: item.amount + 1
      }

    }
    return item
    });

    setItems(filteredItemsForMainPage);
    };

 

  const onItemsSearch = (e) => {
    const {value} = e.target;
    setValue(value);
    const itemsAfterFilter = arrayBlock.filter(({name}) => (

      name.toLowerCase().includes(value.toLowerCase()))

    );

    setItems(itemsAfterFilter);

        console.log(itemsAfterFilter);
  }

   

  useEffect(()=>{
        (async()=>{
            const { data = [] } = await axios ("http://localhost:3001/goods");
            setItems(data);
        })()
    },[]);



  const countItemsBucket = bucketitems.length && bucketitems.reduce((acc, currentItems) => {
    return acc + currentItems.amount
},0
);

console.log(bucketitems);










  return (
    <div className="App">
 <Router >
    <Header
        countIems={countItemsBucket}
        onChangeValueUser={onItemsSearch}
        inputValueSearch = {inputValueSearch}
    />

     

      <Switch>
          <Route exact path="/">
   <MainContent arrayBlock = {items} 
   
   addItemsToBucket={addItemsToBucket}
   
   />
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


    


          </Route>
         
            <Route path = "/bucket"> 
                <Bucket 
                      bucketitems={bucketitems} 
                      deleteItemFromBucket={deleteItemFromBucket} 
                />
            </Route>

        </Switch>


      </Router>



 

    </div>
  );
}

export default App;
