export async function getMenu() {
  /*const menu =[
    {id:1, name:'Te Piteado Maracuya', price: 5.00},
    {id:2, name:'Alita BBQ limo', price: 14.00},
    {id:3, name:'Añañau', price: 13.00},
    {id:4, name:'Parrichi', price: 10.00},
    {id:5, name:'Alita BBQ oriental', price: 15.00},
    {id:6, name:'Te Piteado Piña', price: 16.00},
    {id:7, name:'Salchipapa Clasica', price: 17.00},
    {id:8, name:'Salchipapa 4 Suyos', price: 18.00},
  ]*/



  return new Promise ((resolve, reject)=>{
    //setTimeout(()=>{return resolve(menu) }, 2000)
     fetch(`http://localhost:3000/menu`)
      .then((response) => resolve(response.json()))
      .catch((err) => {
        console.log(err.message);
        reject(err)
      });
  })
}