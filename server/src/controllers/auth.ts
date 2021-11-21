import { Request, Response, NextFunction } from 'express'

export const loadUser = (req: Request, res: Response, next: NextFunction) => {
    console.log(!req.user)
    res.json({
        user: req.user
    })
}

export const logout = (req: Request, res: Response) => {
    req.session = null;
    req.logout();
    res.redirect('/');
}
