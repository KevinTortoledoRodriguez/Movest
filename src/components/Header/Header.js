import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
import {Image} from 'semantic-ui-react';
export class Header extends Component {
    logout(){
        localStorage.removeItem('user');
        window.location='/login'
    }
    render() {
        return (
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                    <Link to="/home">MOVEST</Link>
                    </div>
                    <nav>
                    <div className="nav-mobile">
                        <a id="nav-toggle" href="#!"><span></span></a>
                    </div>
                    <ul className="nav-list">
                        <li><Link to="/home">Inicio</Link></li>
                        <li><Link to="/login" onClick={this.logout.bind(this)}>Salir</Link></li>
                        <li><span><Image src="./descarga.jpg" style= {{width: '70px'}}/></span></li>
                    </ul>
                    </nav>
                </div>
            </section>
        )
    }
}

export default Header
