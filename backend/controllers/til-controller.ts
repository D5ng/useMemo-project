import { RequestHandler } from "express"
import tilServiceInstance from "../services/til-service"
import HttpError from "../utils/http-error"

const getTilPosts: RequestHandler = async (req, res, next) => {
  try {
    const data = await tilServiceInstance.allPosts()
    return data
  } catch (error) {
    if (error instanceof HttpError) {
      return {
        success: false,
        errorMessage: error.message,
      }
    }

    return {
      success: false,
      errorMessage: "알 수 없는 오류로 요청에 실패했어요",
    }
  }
}

const getTilPost: RequestHandler = async (req, res, next) => {
  try {
    const data = await tilServiceInstance.allPost(req.params.tilId)
    return data
  } catch (error) {
    if (error instanceof HttpError) {
      return {
        success: false,
        errorMessage: error.message,
      }
    }

    return {
      success: false,
      errorMessage: "알 수 없는 오류로 요청에 실패했어요",
    }
  }
}

const createTilPost: RequestHandler = (req, res, next) => {}

const deleteTilPost: RequestHandler = (req, res, next) => {}

export { getTilPost, getTilPosts, createTilPost, deleteTilPost }
