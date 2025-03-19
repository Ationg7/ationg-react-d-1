
// function NavigationBar() {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary sticky-top">
//                 <div className="container-fluid">
//                 <img src="https://scontent.fceb1-3.fna.fbcdn.net/v/t1.15752-9/477651124_1411857203130583_7234805112764533203_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEV-3btlmP-xmNGZml140my0gr776leeh3SCvvvqV56HYsbvWZn3fEASuTwWBDnDZfOqDkET_u56gfiwVzdxUm9&_nc_ohc=7_M4-s6ZxA8Q7kNvgFjHjjz&_nc_oc=AdigbvUL9lACp_9qlGO4ykZXvj1Kgf__Z2u4uisz-_NvYufr4grcp4zijSs1oM-ixXI&_nc_zt=23&_nc_ht=scontent.fceb1-3.fna&oh=03_Q7cD1gGiqEuwu1ZnKPhGTTpw1muXTKyCpBJG95z_MGk8-QOi5w&oe=67ECD5AE"width="40" height="40" />
//                 <span className="ms-2 fw-bold text-white">Thrive360</span>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <form className="d-flex">
//                             <button className="btn btn-outline-success" type="submit">Sign in</button>
//                             <button className="btn btn-outline-success" type="submit">Sign up</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default NavigationBar;

import React from "react";
import { useNavigate } from "react-router-dom";
function NavigationBar() {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary sticky-top">
                <div className="container-fluid">
                <img src="https://scontent.fceb1-3.fna.fbcdn.net/v/t1.15752-9/477651124_1411857203130583_7234805112764533203_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEV-3btlmP-xmNGZml140my0gr776leeh3SCvvvqV56HYsbvWZn3fEASuTwWBDnDZfOqDkET_u56gfiwVzdxUm9&_nc_ohc=7_M4-s6ZxA8Q7kNvgFjHjjz&_nc_oc=AdigbvUL9lACp_9qlGO4ykZXvj1Kgf__Z2u4uisz-_NvYufr4grcp4zijSs1oM-ixXI&_nc_zt=23&_nc_ht=scontent.fceb1-3.fna&oh=03_Q7cD1gGiqEuwu1ZnKPhGTTpw1muXTKyCpBJG95z_MGk8-QOi5w&oe=67ECD5AE"width="40" height="40" />
                <span className="ms-2 fw-bold text-white">Thrive360</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" onClick={() => navigate("/Home")}>Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link"  onClick={() => navigate("/Profile")}>Profile</a>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Resources
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Meditate</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Exercise</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Self-care Tips</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                        <button className="btn btn-outline-success" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;
