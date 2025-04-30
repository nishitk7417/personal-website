import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='flex justify-between px-3 py-3 bg-gray-700'>
            <h2 className='text-2xl'>Personal Website</h2>
            <div>
                <ul className='flex gap-5'>
                    <Link to="/about">About me</Link>
                    <Link to="/skill">Skill</Link>
                    <Link to="/hobbies">Hobbies</Link>
                    <Link to="/passion">Passion</Link>
                    <Link to="/academic">Academic Background</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar