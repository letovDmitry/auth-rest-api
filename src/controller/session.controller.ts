import { Request, Response } from "express";
import config from "config";
import { createSession, findSession, updateSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response) {
    const user = await validatePassword(req.body)

    if(!user) {
        return res.status(401).send('Invalid email or password')
    }

    const session = await createSession(user._id, req.get('user-agent') || '')
    
    const accessToken = signJwt({
        ...user, session: session._id, }, 
        { expiresIn: config.get<string>('accessTokenTtl') },
    )

    const refreshToken = signJwt({
        ...user, session: session._id, }, 
        { expiresIn: config.get<string>('refreshTokenTtl') },
    )

    return res.send({ accessToken, refreshToken })
}

export async function getUserSessionHandler(req: Request, res: Response) {
    const user = res.locals.user._id

    const sessions = await findSession({user, valid: true})

    return res.send(sessions)
}

export async function deleteSessionHandler(req: Request, res: Response) {
    const sessionId = res.locals.user.sessionId

    await updateSession({_id: sessionId, valid: false})

    return res.send({
        accessToken: null,
        refreshToken: null
    })
}