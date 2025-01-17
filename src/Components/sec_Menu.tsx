import '../Theme/style.css'


export default function SecondaryMenu(){
    return(
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
    ); 
}