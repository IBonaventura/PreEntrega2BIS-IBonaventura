import CartWidget from "./CartWidget/CartWidget";

function Header() {
    return <header className="mb-4 has-background-blue-lighter">
    return <header className="La Zete-header mb-4 has-background-blue-lighter">
            <div className="container header-top">
                <TopHeader/>
            </div>
            <div className="has-background-blue-light">
                <div className="container">
                    <nav className="navbar has-background-blue-light" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="NavigationMenu">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div id="NavigationMenu" className="navbar-menu">
                            <NavBar/>
                            <CartWidget/>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
}
export default Header;