import { TILModel } from "../models"
import { TilData } from "../types/til.type"
import HttpError from "../utils/http-error"

class TILService {
  constructor(private tilModel: typeof TILModel) {
    this.tilModel = tilModel
  }

  async getAllPosts() {
    try {
      const data = await TILModel.find({})
      return data
    } catch (error) {
      const httpError = new HttpError("TIL 포스트를 불러오는데 오류가 발생했어요", 500)
      return httpError
    }
  }

  async getPostById(id: string) {
    try {
      const data = await TILModel.findById(id)
      return data
    } catch (error) {
      const httpError = new HttpError("TIL 포스트들을 불러오는데 오류가 발생했어요", 500)
      return httpError
    }
  }

  async createPost(requestData: TilData) {
    try {
      const data = new TILModel({ ...requestData })
      await data.save()

      return data
    } catch (error) {
      const httpError = new HttpError("TIL 포스트를 생성하는데 오류가 발생했어요", 500)
      return httpError
    }
  }

  async deletePost(id: string) {
    try {
      const deletedPost = await TILModel.findByIdAndDelete(id)

      if (!deletedPost) {
        throw new HttpError("포스트 아이디가 유효하지 않아요 다시 시도해주세요", 500)
      }

      return deletedPost
    } catch (error) {
      console.log(error)
      const httpError = new HttpError("TIL 포스트를 삭제하는데 오류가 발생했어요", 500)
      return httpError
    }
  }
}

const TILServiceInstance = new TILService(TILModel)

export default TILServiceInstance
