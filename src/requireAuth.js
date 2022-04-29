import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import auth from "./firebase.init";

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return (
            <div className="my-5 py-5">
                <h2 className="text-danger">
                    Please Verify your Email Address!!
                </h2>
                <h5>Check your email account and</h5>
                <h5>verify your email then Refresh the webpage.</h5>
            </div>
        );
    }
    return children;
}
export default RequireAuth;
