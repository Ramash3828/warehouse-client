import {
    useAuthState,
    useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Loading from "./Components/Loading/Loading";
import auth from "./firebase.init";

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Email verification only for email and password
    if (user.reloadUserInfo.passwordHash !== undefined) {
        if (!user.emailVerified) {
            return (
                <div className="my-5 py-5">
                    <h2 className="text-danger">
                        Please Verify your Email Address!!
                    </h2>
                    <h5>Check your email account and</h5>
                    <h5>verify your email then Refresh the webpage.</h5>
                    <button
                        className="form-btn w-25"
                        onClick={async () => {
                            await sendEmailVerification();
                            toast.success("Sent email");
                        }}
                    >
                        Re-send verification Email
                    </button>
                    <ToastContainer />
                </div>
            );
        }
    }

    return children;
}
export default RequireAuth;
