export async function payOrder (order){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(true),1000)
  })
}