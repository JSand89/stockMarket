import { Request,response,Response } from "express";
import axios from 'axios'


const  buyAll = async (request:Request,response:Response)=> {
    //const stock = 'AAPL'
    //--------------------------------------------------------------------//
    const dataAAPL =  await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22`)
    .then(res=>{
        console.log(res.data)
        const toBuy = res.data[0].price*res.data[0].volume
        console.log(toBuy)
        
         return toBuy
    }).catch(error=>{
        console.error(error)
        return 0
    })
    //------------------------------------GOOGL------------------------------
    const dataGOOGL =  await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/GOOGL?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22`)
    .then(res=>{
        console.log(res.data)
        const toBuy = res.data[0].price*res.data[0].volume
        console.log(toBuy)
        
         return toBuy
    }).catch(error=>{
        console.error(error)
        return 0
    })
    //---------------------------------AMZN---------------------------------
    const dataAMZN =  await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/AMZN?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22`)
    .then(res=>{
        console.log(res.data)
        const toBuy = res.data[0].price*res.data[0].volume
        console.log(toBuy)
        
         return toBuy
    }).catch(error=>{
        console.error(error)
        return 0
    })
    //--------------------------------------------TSLA------------------------------
    const dataTSLA =  await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/TSLA?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22`)
    .then(res=>{
        console.log(res.data)
        const toBuy = res.data[0].price*res.data[0].volume
        console.log(toBuy)
        
         return toBuy
    }).catch(error=>{
        console.error(error)
        return 0
    })
    //--------------------------------------------FB------------------------------
    const dataFB =  await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/FB?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22`)
    .then(res=>{
        console.log(res.data)
        const toBuy = res.data[0].price*res.data[0].volume
        console.log(toBuy)
        
         return toBuy
    }).catch(error=>{
        console.error(error)
        return 0
    })
    //--------------------------------------------TWTR------------------------------
    const dataTWTR =  await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/TWTR?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22`)
    .then(res=>{
        console.log(res.data)
        const toBuy = res.data[0].price*res.data[0].volume
        console.log(toBuy)
        
         return toBuy
    }).catch(error=>{
        console.error(error)
        return 0
    })
    //--------------------------------------------UBER------------------------------
    const dataUBER =  await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/UBER?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22`)
    .then(res=>{
        console.log(res.data)
        const toBuy = res.data[0].price*res.data[0].volume
        console.log(toBuy)
        
         return toBuy
    }).catch(error=>{
        console.error(error)
        return 0
    })
    //--------------------------------------------LYFT------------------------------
    const dataLYFT =  await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/LYFT?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22`)
    .then(res=>{
        console.log(res.data)
        const toBuy = res.data[0].price*res.data[0].volume
        console.log(toBuy)
        
         return toBuy
    }).catch(error=>{
        console.error(error)
        return 0
    })
    //--------------------------------------------SNAP------------------------------
    const dataSNAP =  await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/SNAP?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22`)
    .then(res=>{
        console.log(res.data)
        const toBuy = res.data[0].price*res.data[0].volume
        console.log(toBuy)
        
         return toBuy
    }).catch(error=>{
        console.error(error)
        return 0
    })
    //--------------------------------------------SHOP------------------------------

    const dataSHOP =  await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/SHOP?apikey=c13a5d2ecf7cc6b8c50c06d7e1dfce22`)
    .then(res=>{
        console.log(res.data)
        const toBuy = res.data[0].price*res.data[0].volume
        console.log(toBuy)
        
         return toBuy
    }).catch(error=>{
        console.error(error)
        return 0
    })

    response.json(dataAAPL+dataGOOGL+dataAMZN+dataTSLA+dataFB+dataTWTR+dataUBER+dataLYFT+dataSNAP+dataSHOP)
}

const  callToApi = async (stock:string) => {
   
   
}


export default  buyAll;