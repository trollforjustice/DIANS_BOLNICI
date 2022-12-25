const Sidebar = ({lng}) => {
    return (<div className="sidebar">
        {lng && <h1>Мапа на најблиските болници</h1>}
        {!lng && <h1>Map that shows closes hospitals near you</h1>}

    </div> );
}
 
export default Sidebar;