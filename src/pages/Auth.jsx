import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
export default function Auth() {
    const [mode, setMode] = useState("signup")
    const [error, setError] = useState(null)
    const { signUp, user, login, logout } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    function onSubmit(data) {
        setError(null)
        let result;
        if (mode === "signup") {
            result = signUp(data.email, data.password)
        } else {
            result = login(data.email, data.password)
        }
        if (result.success) {
            navigate("/")
        } else {
            setError(result.error)
        }
    }
    return <div>
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    {user && <p>User logged in: {user.email}</p>}
                    <button onClick={logout}>Logout</button>
                    <h1 className="page-title">{mode === "signup" ? "Sign Up" : "Login"}</h1>
                    <form className="auth-form">
                        {error && <div className="error-message">{error}</div>}
                        <div className="form-group">
                            <label htmlFor="email" className="form-lable">Email</label>
                            <input type="email" id="email" className="form-input" {...register("email", { required: "Email is required" })} />
                            {errors.email && <span className="form-error">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" className="form-input" {...register("password", {
                                required: "Password is required", minLength: {
                                    value: 8, message: "Password must be at least 8 characters long."
                                }, pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/,
                                    message:
                                        "Password must include uppercase, lowercase, number, and special character",
                                },
                            })} />
                            {errors.password && <span className="form-error">{errors.password.message}</span>}
                        </div>
                        <button onClick={handleSubmit(onSubmit)} className="btn btn-primary btn-large" type="submit">{mode === "signup" ? "Sign Up" : "Login"}</button>
                    </form>
                    <div className="auth-switch-div">
                        {mode === "signup" ? (<p>Already have an account? <span onClick={() => setMode("login")} className="auth-link">Login</span></p>) : (<p>Don't have an account? <span onClick={() => setMode("signup")} className="auth-link">Sign up</span></p>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

