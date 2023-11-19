import './ItemDetail.css';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

 const ItemDetail = ({id, name, img, category, description, price, stock}) => {
  const [quantityAdded,setQuantityAdded] = useState(0)
 
  const handleOnAdd=(quantity)=>{
  setQuantityAdded(quantity)
}

   return (
    <article className="CardItem">
        <header className="Header">
          <h2 className='ItemHeader'> 
            {name}
          </h2>
      </header>
      <picture>
        <img src={img} alt= {name} className='ItemImg'/> 
      </picture>
      <section>
        <p className="Info">
          Categoria: {category}
        </p>
        <p className="Info">
          ID Categoria: {id}
        </p>
        <p className="Info">
          Descripcion: {description}
        </p>
        
        <p className="Info">
          Precio: ${price}
        </p>
      </section>
      <footer className='ItemFooter'>
        {
          quantityAdded > 0 ? (
            <Link to = '/cart' className= 'option'>Ir al carrito</Link>
          ):( 
            <ItemCount initial ={1} stock = {stock} onAdd={handleOnAdd}/>  
          )
        }
      </footer>
    </article>    
   )
}

export default ItemDetail;
