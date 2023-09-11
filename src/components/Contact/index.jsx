import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    /* useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []) */

    /* const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'your_template_id',
                refForm.current,
                'your_token'
            )
            .then(
                () => {
                    alert('Message sent')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message')
                }
            )
    } */

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t']}
                            idx={15}
                        />
                    </h1>
                    <p /* className='indent-forward' */>
                        Feel free to reach out for job opportunities in software development and audio production
                    </p>
                    <p /* className='indent-forward' */>
                        and guitar lessons as well &gt;w&lt;
                    </p>

                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Enter Your Name' required />
                                </li>

                                <li className='half'>
                                    <input type='email' name='email' placeholder='Enter Your Email' required />
                                </li>

                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>

                                <li>
                                    <textarea name="message" placeholder='Message' required></textarea>
                                </li>

                                <li>
                                    <input type="submit" className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact