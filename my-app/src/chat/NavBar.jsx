import "./component-styles/NavBar.css"



function NavBar(){



    return (
        <nav className="nav-bar">
            <div className="nav-bar-left">
                <h1>AI Assistant</h1>
                <button type="button">Choose a model</button>
            </div>
            <div className="nav-bar-right">
                <button type="button">&#9788;</button>
            </div>
        </nav>
    )
}



export default NavBar