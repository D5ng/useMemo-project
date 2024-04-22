import { Router } from "express"
import { TILController } from "../controllers"

const TILRoutes = Router()

TILRoutes.get("/", TILController.getTilPosts)

TILRoutes.get(":tilId", TILController.getTilPost)

TILRoutes.post("/", TILController.createTilPost)

TILRoutes.delete("/:tilId", TILController.deleteTilPost)

export default TILRoutes
