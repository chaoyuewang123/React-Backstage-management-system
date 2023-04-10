import request from './index'

/* export const captchaAPI =():Promise<CaptchaAPIRes> =>request.get("/prod-api/chatchaImage") */
export const CaptchaAPI =():Promise<CaptchaAPIRes> =>request.get("/prod-api/captchaImage")




export const LoginAPI =(params:LoginAPIReq):Promise<LoginAPIRes> =>request.post("/prod-api/login",params)