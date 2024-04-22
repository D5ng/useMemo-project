import { Model, Schema } from "mongoose"

const tilSchema = new Schema({
  title: { type: String, required: true },
  hashtags: Array,
  contents: { type: String, required: true },
})

const TilModel = new Model("TIL", tilSchema)

export default TilModel
