import React from 'react'

const Demo: React.FC = () =>{
    return (
        <section className="demo">
            <div className="flexbox-container-1">
                <div className="flexbox-item">
                        <p className="login-form header">Login Form</p>
                        <p className="login-form other-text">Login to access your dashboard</p>
                        <form>
                            <div>
                                <input type="text" className="inputs email" name="email" placeholder="  email@example.ca"></input>
                            </div>
                            <div>    
                                <input type="password" className="inputs pwd" name="password" placeholder="  password"></input>
                            </div>
                            <div>
                            <input type="submit" className="btn" value="LOGIN"></input>
                            </div>
                        </form>
                        <p className="login-form other-text">Don't have an account? 
                            <a href="https://wiesfu-garbage-collector-robot.web.app/">Sign Up</a>
                        </p>
                </div>
            </div>
        </section>
    )
}
 
export default Demo;