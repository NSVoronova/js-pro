import React from 'react'
import {Link} from 'react-router-dom'
import Title from '../Title/Title'
import SignForm from '../SignForm/SignForm'
import SignButton from '../SignForm/SignButton/SignButton'

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Title text='Welcome to my Blog...:)'/>
        <SignForm>
        <Link to='/signin' className='sign__button'>
          <SignButton text='Sign In' customClass="sign__button"/>
          </Link>
          <Link to='/signup' className='sign__button'>
            <SignButton text='Sign Up' customClass="sign__button"/>
          </Link>
        </SignForm>
      </div>
    </>
  )
}

export default Home
