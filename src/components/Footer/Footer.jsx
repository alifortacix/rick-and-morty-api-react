import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/" className='nav-link px-2 text-muted'>Homepage</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/characters" className='nav-link px-2 text-muted'>Characters</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/episodes" className='nav-link px-2 text-muted'>Episodes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/locations" className='nav-link px-2 text-muted'>Locations</Link>
                    </li>
                </ul>
                <p className="text-center text-muted">© 2024 This application developed by Ali Fortacı</p>
            </footer>
        </div>
    )
}

export default Footer