import '../Themes/Navbar.css'
export default function SecondaryMenu(){

    return(
        <div className="Maincontainer">
            {/* Main Logo */}
        <div className="NavBar">
        <img src="public/icons/amazon_logo (1).png" alt="Logo" />

        {/* Address part */}
        <div className="NavAdd">
            <p className="text1">Deliver to</p>
            <div className="nav-icon">
            <i className="fa-solid fa-location-dot icon-loc"></i>
            <p className="text2">United Kingdom</p>
            </div>
        </div>

        {/* Search and dropdown */}
        <div className="search-box">
             <form action='#' method='Get' className="search-container">
             <select name="Selection" className="search-dropdown" required>
                <option value="All">All Departments</option>
                <option value="Arts&Crafts">Arts&Crafts</option>
                <option value="Baby">Baby</option>
                <option value="Automotive">Automotive</option>
                <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                <option value="Books">Books</option>
                <option value="Boy's Fashion">Boy's Fashion</option>
                <option value="Computers">Computers</option>
                <option value="Deals">Deals</option>
                <option value="Digital Music">Digital Music</option>
                <option value="Electronics">Electronics</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Girl's Fashion">Girl's Fashion</option>
                <option value="Software">Software</option>
            </select>
            <input type='text' name='search' placeholder='Search Amazon' className='search-input ' />
            <button type='submit' className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
             </form>
            </div>
            <div className="languages">
                <form action='' method='Get' className='lang-form'>
                <label for="language" className='lang-text'><img src="public/icons/united-kingdom (1).png" className="flag"></img>EN</label>
                <select name='language' className="select-lang">
                    <option value="English">🇺🇸 English</option>
                    <option value="Spanish">🇪🇸 Español</option>
                    <option value="Dutch">🇩🇪 Deutsch</option>
                    <option value="French">🇫🇷 Français</option>
                    <option value="Japanis">🇨🇳 中文</option>
                </select>
                </form>
            </div>
            <div className="sign-in">
                <p><span>Hello, sign in</span></p>
                <p className='sign-links'>Account & Lists</p>
            </div>
            <div className="nav-orders">
                <p><span>Reurns</span></p>
                <p className='sign-links'>& Orders</p>
            </div>
        </div>
        <div className="menuBar">
            <nav className="menuItems">
            <a href="" className="Menu_link"><i className="fa-solid fa-bars bar"></i>All</a>
            <a href="" className="Menu_link">Today's Deal</a>
            <a href="" className="Menu_link">Customer Service</a>
            <a href="" className="Menu_link">Registery</a>
            <a href="" className="Menu_link">Gift Cards</a>
            <a href="" className="Menu_link">Sell</a>
            </nav>
        </div>
        </div>
    ); 
}