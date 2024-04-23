import { model, Schema } from "mongoose"
import { TilData } from "../types/til.type"

interface TILSchema extends TilData {}

const tilSchema = new Schema<TILSchema>(
  {
    title: { type: String, required: true },
    hashTags: Array,
    contents: { type: String, required: true },
  },
  { timestamps: true }
)

const TILModel = model<TILSchema>("TIL", tilSchema)

export default TILModel
