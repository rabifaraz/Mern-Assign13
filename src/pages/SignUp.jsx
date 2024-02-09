import React from "react";
import { Navigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FirebaseAuth, FirebaseFirestore } from '../config/firebase'
import { doc, setDoc } from "firebase/firestore";
import SideForm from "../components/SideForm";
import AuthSlider from "../components/AuthSlider";
import CircleAnimation from "../components/CircleAnimation";


function SignUp({ user }) {

    if (user) {
        return <Navigate to="/" />
    }

    const signUpUser = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)

        try {
            const resp = await createUserWithEmailAndPassword(FirebaseAuth, formData.get('email'), formData.get('password'));

            await setDoc(doc(FirebaseFirestore, 'users', resp.user.uid), {
                name: formData.get('name'),
                email: formData.get('email')
            })

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
                                title={'Sign Up'}
                                description={'Enter your email address and password to access admin panel.'}
                                submitHandler={signUpUser}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SignUp;