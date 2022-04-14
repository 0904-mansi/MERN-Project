import React from 'react'
export default function Navbar(params) {
    return (
        <div>
            {/* <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtuXMUAgicVymFm8x8jIHHa-g6wwCJjsbNQ&usqp=CAU" alt="" width="30" height="24" classNameName="d-inline-block align-text-top" />
                        Zomato
                    </a>
                </div>
    </nav> */}

            <nav class="navbar navbar-dark bg-dark ">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Food Ordering</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <a className="nav-link" aria-current="page" href="#">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>

        </div>
    )
}