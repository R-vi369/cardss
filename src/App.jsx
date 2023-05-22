import React from 'react'
import './App.css'
import ProductData from './components/ProductData'
import Content from './Content'
const App = () => {
  return (
    <>
<div className="app">

    {Content.map(Content =>(
      <ProductData
      key={Content.id}
      image={Content.image}
      price={Content.price}
      totalSales={Content.totalSales}
      timeLeft={Content.timeLeft}
      rating={Content.rating}
      />
      ))}
      </div>
     
    </>
  )
}

export default App;