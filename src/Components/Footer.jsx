

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>HUNGER</span>FREE</h3>
                            <p>Join us in our mission to create a world without hunger. Together, we can make a the Hunger Free community today!</p>
                            <div className="footer-icons">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/about">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/contact">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Our App</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/reviews">Reviews</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +91 9090909090</p>
                            <p><i className="fa-solid fa-envelope"></i> hungerfree@gmail.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i> Team HungerFree</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Copyrighted by Hunger Free</p>
            </div>
        </>
    )
}

export default Footer