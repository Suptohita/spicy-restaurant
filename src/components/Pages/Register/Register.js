import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Navbar/Nav';
import { useNavigate } from 'react-router'

const Register = () => {
    const { register, signInUsingGoogle } = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState(false)

    const navigate = useNavigate()


    const userName = (e) => {
        setName(e.target.value)
    }

    const userEmail = (e) => {
        setEmail(e.target.value)
    }

    const userPhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    const userAddress = (e) => {
        setAddress(e.target.value)
    }

    const userPassword = (e) => {
        setPassword(e.target.value)
    }

    const confirmUserPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    useEffect(() => {
        if (password === confirmPassword) {
            setCheckPassword(true)
        }
        else {
            setCheckPassword(false)
        }
    }, [password, confirmPassword])


    const handleRegister = (e) => {
        e.preventDefault()
        register(email, confirmPassword, name, phoneNumber, address, navigate)

        if (checkPassword && name && email && phoneNumber && address) {
            const data = { name, email, confirmPassword, phoneNumber, address }
            fetch('http://localhost:8000/registerUsers', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
        }
    }

    return (
        <div>
            <Nav></Nav>
            <div className='md:my-32 mt-16 mb-24 flex justify-start md:ml-20 lg:ml-80 mx-7'>
                <div>
                    <h5 className='text-base text-yellow-500 font-bold'>Register</h5>
                    <h1 className='text-5xl font-bold mt-2 mb-10'>Create Account</h1>

                    <form className='inline'>
                        <div className='md:grid grid-cols-2 gap-10'>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="name" className='font-semibold'>Full Name <span className='text-red-500'>*</span></label>
                                <br />
                                <input onChange={userName} type="text" name="full name" id="name" required placeholder='Your name' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-200 mt-2' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="email" className='font-semibold'>Email Adress <span className='text-red-500'>*</span></label>
                                <br />
                                <input onChange={userEmail} type="email" name="email" id="email" required placeholder='Email address e.g.  Json@gmail.com' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-300 mt-2 ' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="phone number" className='font-semibold'>Phone Number <span className='text-red-500'>*</span></label>
                                <br />
                                <input onChange={userPhoneNumber} type="tel" name="password" id="phone number" required placeholder='e.g. 43534533' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-300 mt-2' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="country" className='font-semibold'>Address <span className='text-red-500'>*</span></label>
                                <br />
                                <input onChange={userAddress} type="text" name="country" id="country" required placeholder='Your Address' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-300 mt-2' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="password" className='font-semibold'>Password <span className='text-red-500'>*</span> </label>
                                <br />
                                <input onChange={userPassword} type="password" name="password" id="password" required placeholder='Enter Your Password' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-300 mt-2' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="password" className='font-semibold'>CONFIRM PASSWORD <span className='text-red-500'>*</span> </label>
                                <br />
                                <input onChange={confirmUserPassword} type="password" name="confirm password" id="confirm_password" required placeholder='Retype Your Password' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-300 mt-2' />
                            </div>
                        </div>

                        {
                            checkPassword ? '' : <h6 className='text-center mt-3 font-medium text-red-600'>Password didn't match</h6>
                        }

                        {
                            !password || !checkPassword ? <button disabled={!checkPassword} className='bg-yellow-200 p-2 mt-10 md:px-16 px-8 text-white font-bold mr-3 cursor-not-allowed'>Submit</button>
                                :
                                <button onClick={handleRegister} disabled={!checkPassword} className='bg-yellow-500 p-2 mt-10 md:px-16 px-8 text-white font-bold hover:bg-yellow-600 mr-3'>Submit</button>
                        }
                    </form>

                    <button className='border border-yellow-500 p-1.5 md:px-7 px-5 font-bold hover:bg-yellow-500 hover:text-white md:ml-3' onClick={(e) => signInUsingGoogle()}>Google Sign In</button>

                    <h6 className='mt-3 font-medium text-gray-700'>Already registered? <Link to='/login' className='font-bold text-yellow-500 ml-2'>Please Login</Link></h6>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;