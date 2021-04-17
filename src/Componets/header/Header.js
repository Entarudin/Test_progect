
import '../../App.css';


function Header ({onChangeValueUser, inputValueSearch}) {

    return (
        <div className="header">
            <header className="header">

                <input
                        type="text"
                        className="search_input"
                        onChange={onChangeValueUser}
                        value={inputValueSearch}

                />
            </header>

        </div>
    );
}

export default Header;
