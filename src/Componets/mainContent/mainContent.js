
import '../../App.css';


function mainContent ({arrayBlock}) {


    return (
        <main className="main">
          {/*  <div className="shop-items">
                <p className="shop-title">Кросовки</p>
                <p className="shop-title">adidas</p>
            </div>
            <div className="shop-items">
                <p className="shop-title">Кросовки</p>
                <p className="shop-title">adidas</p>
            </div>
            <div className="shop-items">
                <p className="shop-title">Кросовки</p>
                <p className="shop-title">adidas</p>
            </div>
*/}

            {
                arrayBlock.map((item, index) => (
                    <div className="shop-items" key={item.model}>
                        <p className="shop-title">{item.name}</p>
                        <p className="shop-title">{item.model}</p>
                    </div>
                ))
            }
        </main>
    );
}

export default mainContent;
