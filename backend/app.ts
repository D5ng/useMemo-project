import express, { NextFunction, Request, Response, json } from "express"
import mongoose from "mongoose"
import "dotenv/config"
import * as Routes from "./routes"
import HttpError from "./utils/http-error"

const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI!

const app = express()

app.use(json())

app.use("/api/til", Routes.TILRoutes)

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404)
  throw error
})

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) return next(error)
  res.status(error.code || 500).json({ message: error.message || "An unknown error occurred!" })
})

mongoose
  .connect(MONGODB_URI)
  .then(() => app.listen(PORT, () => console.log(`listening at PORT ${PORT}`)))
  .catch((error) => console.log(error))
