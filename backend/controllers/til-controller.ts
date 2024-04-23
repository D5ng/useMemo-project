import { RequestHandler } from "express"
import HttpError from "../utils/http-error"
import { TILServiceInstance } from "../services"
import { TilData } from "../types/til.type"

const getTilPosts: RequestHandler = async (req, res, next) => {
  try {
    const data = await TILServiceInstance.getAllPosts()
    return res.status(200).json({ data })
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
    const data = await TILServiceInstance.getPostById(req.params.tilId)
    return res.status(200).json({ data })
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

const createTilPost: RequestHandler = async (req, res, next) => {
  const body = req.body as TilData

  if (!body.title || !body.contents) {
    throw new HttpError("제목과 내용을 필수로 입력해주세요", 400)
  }

  try {
    const data = await TILServiceInstance.createPost(body)
    return res.status(200).json({ data })
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

const deleteTilPost: RequestHandler = async (req, res, next) => {
  const tilId = req.params.tilId

  try {
    const data = await TILServiceInstance.deletePost(tilId)
    return res.status(200).json({ data })
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

export { getTilPost, getTilPosts, createTilPost, deleteTilPost }
