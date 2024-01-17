require('dotenv').config({path:'./env'})
import connectDB from "./db";

connectDB()
// ( async () => {
//     try{ 
//       await
//         mongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`)
//         app.on("error", (error) =>{
//             console.log("ERRR:",error);
//             throw error
//         })

//         app.listen(process.env.PORT,() => {
//             console.log(`App is listening on port $
//             {process.env.PORT}`);
//         })
//     } catch(error){
//         console.error("ERROR:",error)
//         throw error
//     }

// })()