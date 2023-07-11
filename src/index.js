import express from "express"
import rootRouter from "./routes/rootRouter.js"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())
app.listen(8080)

app.use("/", rootRouter)