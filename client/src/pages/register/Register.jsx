import './register.css';


export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">HopagoSocial</h3>
                <span className="registerDesc">Create new account and join the HopagoSocial!</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input type="text" placeholder='Username...' className="registerInput" />
                    <input type="email" placeholder='Email...' className="registerInput" />
                    <input type="password" placeholder='Password...' className="registerInput" />
                    <input type="password" placeholder='Password Again...' className="registerInput" />
                    <button className="registerButton">Sign up</button>
                    <button className="registerLoginBtn">
                        Log into account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
