import * as service from './service'
import { Request, Response } from "express"


export const getPeople = async (req: Request, res: Response) => {
    await service.getPeople().then(
        (v) => res.send(v)
    )
        .catch(
            (error) => res.status(404).send(error)
        )
}