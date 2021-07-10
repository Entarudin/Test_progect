
import '../../App.css';
import {

    Link
  } from "react-router-dom";

function Header ({onChangeValueUser, inputValueSearch,countIems = 0}) {

    return (
        <div className="header">
                <Link to = "/" className = "main-title">
                   
                   Главная

                </Link>

            <header className="header">

                <input
                        type="text"
                        className="search_input"
                        placeholder = "Enter to predmet on search"
                        onChange={onChangeValueUser}
                        value={inputValueSearch}

                />
                <Link to = "/bucket" className = "bucket">
                    <img 
                    className = "bucket-icon"
                    src = "https://c0.klipartz.com/pngpicture/899/256/sticker-png-computer-icons-shopping-cart-shopping-cart-desktop-wallpaper-commerce-area-shopping.png"
                    alt=""
                    
                    
                    
                    />
                        {
                        Boolean(countIems) && (
                        <span className = "badge">{countIems}</span>
                        )}
                    

                </Link>
            </header>

        </div>
    );
}

export default Header;
