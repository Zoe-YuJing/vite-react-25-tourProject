

function Header() {
    return(<>
        <nav class="navbar navbar-light bg-grey-000">
            <div class="container ">
            <a  href="#">
                <img src="public\image\Logo\Type=Desktop, Colour=Colour.png" alt="Logo" width="206" height="40" className="d-none d-md-block"/>
                <img src="public\image\Logo\Type=Mobile, Colour=Colour.png" alt="Logo" width="86" height="40" className="d-md-none "/>
            </a>
            <div className=" d-none d-md-inline">
                <ul className="nav">
                    <li className="me-2"><a className="nav-link text-primary" href="#">旅途行程</a></li>
                    <li className="me-2"><a className="nav-link text-primary" href="#">拾光日誌</a></li>
                    <li><a className="nav-link text-primary" href="#">關於我們</a></li>
                </ul>
            </div>
            <div className="nav align-items-center">
                <i className="bi bi-cart3 text-primary me-3"></i>
                {/* <a className="nav-link text-primary">登入</a> */}

                <div className="dropdown">
                <button className="btn btn-grey-000 dropdown-toggle p-0 border-0 text-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://plus.unsplash.com/premium_photo-1675626487177-c3d2f8d9ccf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="user-image"  className="img me-2 lh-1"/>Joyce
                </button>
                <ul className="dropdown-menu px-4 text-primary" aria-labelledby="dropdownMenuButton1">
                    <li className="mb-2"><a className="dropdown-item text-primary" href="#"><i class="bi bi-person fs-5 lh-1 me-3"></i>會員資訊</a></li>
                    <li className="mb-2"><a className="dropdown-item text-primary" href="#"><i class="bi bi-bookmark fs-5 lh-1 me-3"></i>我的蒐藏</a></li>
                    <li className="mb-2"><a className="dropdown-item text-primary" href="#"><i class="bi bi-truck-front fs-5 lh-1 me-3"></i>訂單管理</a></li>
                    <li ><a className="dropdown-item text-primary" href="#"><i class="bi bi-box-arrow-right fs-5 lh-1 me-3"></i>會員登出</a></li>
                </ul>
                </div>

            </div>

           
            </div>
            </nav>
    
    </>)

}

export default Header;