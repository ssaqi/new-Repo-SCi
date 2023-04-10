import React from 'react'
import './Dashboard.css';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'
export default function DashNav() {
    return (

        <>
            <div className='container'>
      
                <center>
                    <Link to="/DashboardFeatures">
                    <Button variant="outlined" startIcon={<DashboardIcon />}
                        className="btn text-white"
                        style={{ backgroundColor: "#55acee", border: "none" }}
                    >
                        Dashboard
                    </Button></Link>
                    <br /><br />
                    <center>
                    <Link to="/account">
                        <Button color="secondary" startIcon={<AccountCircleIcon />}
                            className="btn btn-secondary btnn1"
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-40px",}}>
                            Profile
                        </Button></Link>
                    </center>
                    <br />
                    <center>
                        <Button color="secondary" startIcon={<svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.07179 29.3801L0 23.0611L1.42607 21.196L7.47 27.485L15.7093 18.1784C16.0931 17.7448 16.6059 17.5016 17.1401 17.4997C17.6743 17.4979 18.1883 17.7375 18.5743 18.1684L22.4571 22.4986L28.4357 15.032L30 16.7383L24.0204 24.2074C23.8272 24.4486 23.595 24.6427 23.337 24.7784C23.0791 24.9142 22.8007 24.9889 22.5179 24.9982C22.2351 25.0075 21.9535 24.9512 21.6894 24.8326C21.4254 24.714 21.1841 24.5355 20.9796 24.3074L17.1471 20.0334L8.93357 29.3088C8.5522 29.7398 8.04525 29.9865 7.51446 29.9995C6.98367 30.0124 6.4683 29.792 6.07179 29.3801Z" fill="black" fill-opacity="0.6" />
                            <path d="M30.0001 8.7504H25.7144L27.8572 5.00024L30.0001 8.7504Z" fill="black" fill-opacity="0.6" />
                            <path d="M21.4285 0H17.1428V2.50011H21.4285V5.00021H18.2143V7.50032H21.4285V10.0004H17.1428V12.5005H21.4285C21.9966 12.4995 22.5411 12.2358 22.9428 11.7672C23.3445 11.2985 23.5705 10.6632 23.5714 10.0004V2.50011C23.5708 1.83724 23.3449 1.20171 22.9431 0.732996C22.5414 0.264278 21.9967 0.000661874 21.4285 0Z" fill="black" fill-opacity="0.6" />
                            <path d="M15.0001 12.5005H8.57153V7.50032C8.5721 6.83745 8.79805 6.20193 9.19979 5.73321C9.60153 5.26449 10.1462 5.00088 10.7144 5.00021H12.8572V2.50011H8.57153V0H12.8572C13.4254 0.000661874 13.9701 0.264278 14.3718 0.732996C14.7736 1.20171 14.9995 1.83724 15.0001 2.50011V5.00021C14.9995 5.66308 14.7736 6.29861 14.3718 6.76733C13.9701 7.23604 13.4254 7.49966 12.8572 7.50032H10.7144V10.0004H15.0001V12.5005Z" fill="black" fill-opacity="0.6" />
                            <path d="M4.28571 10.0004V0H2.14286V1.25005H0V3.75016H2.14286V10.0004H0V12.5005H6.42857V10.0004H4.28571Z" fill="black" fill-opacity="0.6" />
                        </svg>
                        }
                            className="btn btn-secondary"
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-30px" }} >
                            Summary
                        </Button>
                    </center>
                    <br />
                    <center>
                        <Button color="secondary" startIcon={<svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3.92339C0 2.88284 0.395088 1.88491 1.09835 1.14913C1.80161 0.413356 2.75544 0 3.75 0L26.25 0C27.2446 0 28.1984 0.413356 28.9016 1.14913C29.6049 1.88491 30 2.88284 30 3.92339V19.617C30 20.6575 29.6049 21.6554 28.9016 22.3912C28.1984 23.127 27.2446 23.5403 26.25 23.5403H8.27625C7.77901 23.5405 7.30217 23.7472 6.95062 24.1151L1.60125 29.7118C1.47024 29.8492 1.30322 29.9429 1.12132 29.981C0.939414 30.019 0.750809 29.9998 0.579374 29.9256C0.407938 29.8515 0.261379 29.7258 0.158245 29.5645C0.0551111 29.4031 3.94029e-05 29.2134 0 29.0194L0 3.92339ZM13.4887 9.34944C13.3652 9.15645 13.2225 8.97761 13.0631 8.81586C12.8125 8.54588 12.5138 8.32994 12.1838 8.18027L12.1687 8.17242C11.7247 7.95671 11.2408 7.84555 10.7513 7.84678C8.955 7.84678 7.5 9.31021 7.5 11.1169C7.5 12.9217 8.955 14.3851 10.7513 14.3851C11.3944 14.3851 11.9925 14.1988 12.4969 13.8751C12.24 14.6382 11.7656 15.4523 10.9781 16.2683C10.9039 16.3441 10.8454 16.4349 10.806 16.5353C10.7667 16.6356 10.7474 16.7433 10.7493 16.8517C10.7512 16.9601 10.7744 17.067 10.8173 17.1657C10.8602 17.2644 10.9219 17.3529 10.9988 17.4257C11.3231 17.7396 11.8369 17.7298 12.15 17.4061C14.6512 14.799 14.7188 11.9958 13.9144 10.1361C13.7962 9.86119 13.6537 9.59849 13.4887 9.3514V9.34944ZM20.625 13.8751C20.37 14.6382 19.8937 15.4523 19.1062 16.2683C19.0322 16.3442 18.9738 16.4352 18.9346 16.5356C18.8954 16.636 18.8762 16.7437 18.8783 16.8521C18.8805 16.9606 18.9038 17.0674 18.9468 17.166C18.9899 17.2647 19.0518 17.3531 19.1287 17.4257C19.4513 17.7396 19.965 17.7298 20.2781 17.4061C22.7794 14.799 22.8469 11.9958 22.0444 10.1361C21.9256 9.86114 21.7825 9.59844 21.6169 9.3514C21.4934 9.15771 21.3507 8.9782 21.1912 8.81586C20.9407 8.54584 20.6419 8.32989 20.3119 8.18027L20.2969 8.17242C19.8534 7.95699 19.3702 7.84584 18.8812 7.84678C17.0869 7.84678 15.63 9.31021 15.63 11.1169C15.63 12.9217 17.0869 14.3851 18.8812 14.3851C19.5244 14.3851 20.1225 14.1988 20.6269 13.8751H20.625Z" fill="black" fill-opacity="0.6" />
                        </svg>
                        }
                            className="btn btn-secondary"
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-50px" }}>
                           Chat
                        </Button>
                    </center>
                    <br />
                    <center>
                        <Button color="secondary" startIcon={<svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3845 16.5433H24.0648L20.9206 19.7668L23.0768 21.9231L29.9999 15L23.0768 8.0769L20.8413 10.2332L24.0648 13.4567H10.3845V16.5433Z" fill="black" fill-opacity="0.6" />
                            <path d="M14.9784 26.9207C11.7981 26.9207 8.8125 25.6803 6.5625 23.4303C4.3125 21.1803 3.07933 18.1875 3.07933 15C3.07933 11.8197 4.31971 8.81971 6.5625 6.56971C8.8125 4.31971 11.7981 3.07933 14.9784 3.07933C18.1514 3.07933 21.1298 4.3125 23.3798 6.55529L25.5649 4.37019C24.9519 3.76442 24.2812 3.20192 23.5673 2.69712C21.0361 0.9375 18.0721 0 14.9784 0C6.72115 0 0 6.72837 0 15C0 23.2716 6.72115 30 14.9784 30C18.0721 30 21.0361 29.0625 23.5601 27.2957C24.2812 26.7909 24.9447 26.2356 25.5577 25.6226L23.3798 23.4447C21.137 25.6875 18.1514 26.9207 14.9784 26.9207Z" fill="black" fill-opacity="0.6" />
                        </svg>
                        }
                            className="btn btn-secondary"
                            style={{ color: "#8f8e8e", border: "none", marginLeft:"-30px" }}>
                            Logout
                        </Button>

                    </center>


                </center>



            </div>

        </>
    )
}
