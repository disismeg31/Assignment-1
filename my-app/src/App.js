 import Product from './Components/Product'
import './App.css';

function App() {
  const products=[
    {
      id:1,
      Title: 'Product 1',
      Price: '10',
      Description: 'First Product',
    },
    {
      id:2,
      Title: 'Product 2',
      Price: '20',
      Description: 'Second Product',
    }
  ]



  return (
    <div className="App">
       <h1>My Demo Shop</h1>
        <Product Title={products[0].Title} Price={products[0].Price} Description={products[0].Description}/>
        <Product Title={products[1].Title} Price={products[1].Price} Description={products[1].Description}/>
    </div>
  );
}

export default App;
