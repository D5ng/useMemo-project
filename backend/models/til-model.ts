import { model, Schema } from "mongoose"

interface TILSchema {
  title: string
  hashTags: string[]
  contents: string
}

const tilSchema = new Schema<TILSchema>({
  title: { type: String, required: true },
  hashTags: Array,
  contents: { type: String, required: true },
})

const TILModel = model<TILSchema>("TIL", tilSchema)

export default TILModel
