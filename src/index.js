import app from "./app.js";
import { PORT } from "./constant.js";
import connectDb from "./db/index.js";

connectDb().then(()=>{
app.listen(PORT || 7000,()=>{
    console.log('server listening on port' ,PORT);
});
}).catch(()=>{
    console.error('Error connecting to DB');
    process.exit(1);
})