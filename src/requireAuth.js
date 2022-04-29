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
    if (!user.emailVerified) {
        console.log("Please Verify your Mail");
        return;
    }
    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
export default RequireAuth;
