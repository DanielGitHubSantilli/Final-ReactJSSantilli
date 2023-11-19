//voy a tener solamente las funciones que me traigan la promesa. No voy a manejar funciones.
export const products =[
  {
    stock:300,
    category: "liquidos",
    description: "Detergente Cif 300 cm3",
    img: "https://i.postimg.cc/P5Fvv5jB/Detergente-Cif-300.jpg",
    name:"Detergente",
    price: 1000
  },
  {
    stock:300,
    category: "liquidos",
    description: 'Lavandina 1000 cm3',
    img: "https://i.postimg.cc/2563zRL2/Lavandina-Ayudin.webp",
    name:"Lavandina",
    price: 745
  },
  {
    stock:200,
    category: "cremosos",
    description: "Detergente Magistral 1000 cm3",
    img: "https://i.postimg.cc/pdtk7C9W/Detergente-Magistral.webp",
    name:"Detergente 1000 cm3",
    price: 3500
  }
]

export const getProducts = () => {
  return new Promise((resolve,reject)=>{
    let error = false
    setTimeout(()=>{
      if (error){
        reject('No hay data, intente más tarde')
      }else{
        resolve(products)
      }
    },2000)
  })
}

export const getItem = (id)=>{
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(products.find((item)=>item.id === parseInt(id)))
    }, 2000);
  })
}

//export default products;