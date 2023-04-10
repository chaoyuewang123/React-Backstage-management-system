import { ChangeEvent, useEffect, useState } from 'react'
import { Input, Space, Button,message } from 'antd'
import {useNavigate} from 'react-router-dom'
import styles from './Login.module.scss'
import initLoginBg from './init'
import './login.less'
import {CaptchaAPI,LoginAPI} from '@/request/api'
export default function Login() {


    let navigate = useNavigate();

    useEffect(() => {
        initLoginBg();
        window.onresize = function () { initLoginBg() };
        getCaptchImg();
    }, [])

    const [usernameVal,steUsernameVal] =useState('');
    const [passwordVal,stePasswordVal] =useState('');
    const [captchaVal,steCaptchaVal] =useState('');
    const [captchaImg,steCaptchaImg] = useState('');

    const usernamechange = (e:ChangeEvent<HTMLInputElement>) =>{
        steUsernameVal(e.target.value);
    }
    const passwordchange = (e:ChangeEvent<HTMLInputElement>) =>{
        stePasswordVal(e.target.value);
    }
    const captchachange = (e:ChangeEvent<HTMLInputElement>) =>{
        steCaptchaVal(e.target.value);
    }

    const goLogin = async() =>{
       if(!usernameVal.trim()|| !passwordVal.trim()||!captchaVal.trim()){
        message.warning("Cant be empty")
       }
       let loginAPIRes = await LoginAPI({
        username:usernameVal,
        password:passwordVal,
        code:captchaVal,
        uuid:localStorage.getItem('uuid') as string
       })
       console.log(loginAPIRes)
       if(loginAPIRes.code === 200){
        message.success('login success')
        localStorage.setItem("react-backstage-managemnet-token",loginAPIRes.token);
        navigate('/page1')
        localStorage.removeItem('uuid')
       }
    }

    const getCaptchImg = async () =>{
/*         captchaAPI().then((res)=>{
            console.log(res)
        }) */
        let CaptchaAPIRes = await CaptchaAPI();
        console.log(CaptchaAPIRes)
        if(CaptchaAPIRes.code === 200){
            steCaptchaImg("data:image/gif;base64,"+CaptchaAPIRes.img)
            localStorage.setItem("uuid",CaptchaAPIRes.uuid)
        }
    }


    return (
        <div className={styles.loginPage}>
            <canvas id="canvas" style={{ display: 'block' }}></canvas>
            <div className={styles.loginBox +" loginbox1"}>
                <div className={styles.title}>
                    <h1>Backstage Management System</h1>
                    <p>Strive Everyday</p>
                </div>
                <div id="form">
                    <Space direction='vertical' size="large" style={{ display: 'flex' }}>
                        <Input placeholder='Uername' onChange={usernamechange}/>
                        <Input.Password placeholder='Password' onChange={passwordchange}></Input.Password >
                        <div className="captchabox">
                            <Input placeholder='verification code' onChange={captchachange}/>
                            <div className="captchaImg" onClick={getCaptchImg}>
                            <img height='38' src={captchaImg} alt="" />
                            </div>
                        </div>
                        <Button type="primary"  className='loginBtn' block onClick={goLogin}>Log in</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
