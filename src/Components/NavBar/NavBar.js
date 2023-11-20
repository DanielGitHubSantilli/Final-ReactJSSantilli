import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import CAIDIM from '../../Assets/CAIDIM.svg'

const Navbar = () => {
    return (
        <nav className="bg-green-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    <img src={CAIDIM} className="w-12 h-12" alt="CAIDIM" />
                </Link>

                <div className="space-x-4">
                    <NavLink to={`/Category/liquidos`} activeClassName="ActiveOption" className="Option">Productos Líquidos</NavLink>
                    <NavLink to={`/Category/cremosos`} activeClassName="ActiveOption" className="Option">Productos Cremosos</NavLink>
                    <NavLink to={`/Category`} activeClassName="ActiveOption" className="Option">Todos los Productos</NavLink>
                </div>

                <div className="flex items-center space-x-4">
                    <CartWidget />
                    <Link to="/signup" className="text-white hover:text-green-500">
                        Registrarse
                    </Link>
                    <Link to="/login" className="text-white hover:text-green-500">
                        Ingresar
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


