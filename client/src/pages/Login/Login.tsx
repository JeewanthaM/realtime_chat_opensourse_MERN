import React from 'react'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const apiService = new ApiService();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useContext(UserDetails);
    const { clearData } = useParams() as any;

    useEffect(() => {
        if (clearData) {
            removeToken();
            setUser(null);
        } else {
            if (user) {
                history.push("/dashboard");
            }
        }
    }, []);

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
  );

  async function handleLogin() {
    setIsLoading(true);
    try {
        let result = (await apiService.login({
            username: email,
            password,
            deviceCode: getDeviceCode(),
        })) as any;
        // debugger;
        result = result.data;
        saveToken(result.token);
        await getUserDetails();
        history.push("/dashboard");
    } catch (error: any) {
        console.log(error?.response, "error-login");

        if (!handleLoginErrorNavigation(error, email, history)) {
            handleErrors(error);
        }
    }
    setIsLoading(false);
}
}
