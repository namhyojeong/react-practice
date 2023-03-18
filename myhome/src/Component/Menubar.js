import { NavLink } from 'react-router-dom';

function Menubar() {
    return (
        <div className="menubar">
            <div className="movie"><NavLink to="/Movie" >★★★★★</NavLink></div>
            <div className="movie2"><NavLink to="/Movie2" >★★★★★★</NavLink></div>
            <div className="movie3"><NavLink to="/Movie3" >★★★★★★★</NavLink></div>
            <div className="movie4"><NavLink to="/Movie4" >★★★★★★★★</NavLink></div>
            <div className="movie5"><NavLink to="/Movie5" >★★★★★★★★★</NavLink></div>
        
        </div>
    );
}

export default Menubar;