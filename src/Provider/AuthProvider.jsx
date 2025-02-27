import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { toast } from "react-toastify";
import useNormalAxios from "../Hooks/useNormalAxios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const normalAxios = useNormalAxios();

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (displayName, photoURL) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  const ChangePassword = (newPassword) => {
    // setLoading(true);
    return updatePassword(auth.currentUser, newPassword);
  };

  const sendResetEmail = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const verifyAccount = () => {
    setLoading(true);
    sendEmailVerification(auth.currentUser)
      .then(() => {
        toast.info(
          "Verification email sent! Please check your inbox to verify your account."
        );
      })
      .catch((error) => {
        toast.error(error.message ? error.message : error.code);
      });
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribeUser = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        const email=currentUser.email 
        const user = { email };
        await normalAxios.post("/jwt", user,{withCredentials: true});
        localStorage.setItem("email", email)
        setUser(currentUser);

      } else {
        normalAxios.get("/logout",{withCredentials: true});
        localStorage.removeItem("email")
        setUser(currentUser);
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`
      }
      setLoading(false);
    });

    return () => {
      unsubscribeUser();
    };
  }, []);

  const value = {
    user,
    setUser,
    creatUser,
    updateUserProfile,
    loginUser,
    logoutUser,
    loading,
    setLoading,
    verifyAccount,
    ChangePassword,
    sendResetEmail,
    loginWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
