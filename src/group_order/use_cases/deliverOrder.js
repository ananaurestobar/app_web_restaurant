export async function deliverOrder (order){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(true),1000)
  })
}