import React from "react";
import { Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseAuth } from '../config/firebase'
import SideForm from "../components/SideForm";
import AuthSlider from "../components/AuthSlider";
import CircleAnimation from "../components/CircleAnimation";

function SignIn({ user }) {

  if (user) {
    return <Navigate to="/" />
  }

  const loginUser = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)

    try {
      await signInWithEmailAndPassword(FirebaseAuth, formData.get('email'), formData.get('password'));

    } catch (e) {
      alert(e.message)
    }

  }

  return (
    <>

      <div className="wrapper">
        <section className="sign-in-page">
          <CircleAnimation />
          <div className="container p-0">
            <div className="row no-gutters">
              <AuthSlider />

              <SideForm
                title={'Sign In'}
                description={'Enter your email address and password to access admin panel.'}
                submitHandler={loginUser}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SignIn
