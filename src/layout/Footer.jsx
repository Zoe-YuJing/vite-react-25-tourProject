function Footer() {
    return (<>
         <footer class="bg-primary-800 py-8">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                {/* <div> */}
                        <img src="public\image\Logo\Type=Desktop, Colour=White.png" alt="Logo" width="206" height="40" className="mb-7"/>
                    {/* <div> */}
                        <ul className="footer-list p-0 mb-7 d-md-flex"> 
                            <li className="px-3 py-2 mb-6 mb-md-0 me-md-6"><a className="footer-link" href="#">聯絡我們</a></li>
                            <li className="px-3 py-2 mb-6 mb-md-0 me-md-6"><a className="footer-link" href="#">常見問題</a></li>
                            <li className="px-3 py-2"><a className="footer-link" href="#">更多資訊</a></li>
                        </ul>
                    {/* </div> */}
                {/* </div> */}

                {/* <div> */}
                    <div className="text-grey-000 text-start mb-7">
                        <p className="mb-md-6">客服信箱：Service@travel.com</p>
                        <p className="mb-md-6">客服專線：09XX-XXX-XXX |平日9:00~18:00</p>
                        <p className="mb-0">聯絡地址：新北市板橋區仁愛路XXX號</p>
                    </div>
                    <div className="mb-7">
                        <a className="fs-10 text-grey-000 lh-1" href="#"><i className="bi bi-facebook  me-7"></i></a>
                        <a className="fs-10 text-grey-000 lh-1" href="#"><i className="bi bi-instagram  me-7"></i></a>
                        <a className="fs-10 text-grey-000 lh-1" href="#"><i className="bi bi-line"></i></a>
                    </div>
                    <div>
                        <p className="text-grey-000 fs-sm-8 mb-0">旅途時光 ©旅途時光股份有限公司 | 統一編號12345678</p>
                    </div>
                {/* </div> */}
            </div>
            </footer>
    </>)
}

export default Footer;



