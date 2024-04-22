import { TILModel } from "../models"
import HttpError from "../utils/http-error"

class TILService {
  constructor(private tilModel: typeof TILModel) {
    this.tilModel = tilModel
  }

  async allPosts() {
    try {
      const datas = await TILModel.find({})
      return datas
    } catch (error) {
      const httpError = new HttpError("TIL 포스트를 불러오는데 오류가 발생했어요", 500)
      return httpError
    }
  }

  async onePost(id: string) {
    try {
      const datas = await TILModel.findById(id)
      return datas
    } catch (error) {
      const httpError = new HttpError("TIL 포스트들을 불러오는데 오류가 발생했어요", 500)
      return httpError
    }
  }
}

const tilServiceInstance = new TILService(TILModel)

export default tilServiceInstance
