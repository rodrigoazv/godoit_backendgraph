/* eslint-disable space-before-function-paren */
import { Request, Response } from 'express'

class UserController {
  /** @GET index all users */
  public async index(req: Request, res: Response) {
    try {
      res.status(200).json({ status: true })
    } catch (err) {
      console.log(err)
    }
  }

  public async store(req: Request, res: Response) {

  }
}

export default new UserController()
