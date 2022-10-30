import React from 'react'

export default function Login() {
  return (
    <div className="section login-wrapper">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="body">
                    <form>
                        <div className="login-box">
                            <p className="title">Login</p>
                            <p className="sub-title">
                                Please enter your email address and
                                password to continue
                            </p>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Enter your email"
                            />
                            <AppPasswordField placeholder={"Enter your password"} setter={setPassword} />
                            <Link
                                to="forgot-password"
                                className="text-forgot-password"
                            >
                                Forgot Password?
                            </Link>

                            <AppButton
                                onClick={handleLogin}
                                isLoading={isLoading}
                            >
                                Login
                            </AppButton>

                            <p className="text-not-registered">
                                Not Yet Registered?
                                <span style={{ cursor: "pointer" }}
                                    onClick={() => { window.open('https://liwecommunities.com/request-for-a-demo/') }}>
                                    Contact Liwe Communities
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
