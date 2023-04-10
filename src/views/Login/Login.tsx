import { ChangeEvent, useEffect, useState } from 'react'
import { Input, Space, Button } from 'antd'
import styles from './Login.module.scss'
import initLoginBg from './init'
import './login.less'

export default function Login() {

    useEffect(() => {
        initLoginBg();
        window.onresize = function () { initLoginBg() };
    }, [])

    const [usernameVal,steUsernameVal] =useState('');
    const [passwordVal,stePasswordVal] =useState('');
    const [captchaVal,steCaptchaVal] =useState('');
    const usernamechange = (e:ChangeEvent<HTMLInputElement>) =>{
        steUsernameVal(e.target.value);
    }
    const passwordchange = (e:ChangeEvent<HTMLInputElement>) =>{
        stePasswordVal(e.target.value);
    }
    const captchachange = (e:ChangeEvent<HTMLInputElement>) =>{
        steCaptchaVal(e.target.value);
    }

    const goLogin =() =>{
        console.log()
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
                            <div className="captchaImg">
                            <img height='38' src="" alt="" />
                            </div>
                        </div>
                        <Button type="primary"  className='loginBtn' block onClick={goLogin}>Log in</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
