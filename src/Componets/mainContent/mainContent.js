
import '../../App.css';


function mainContent ({arrayBlock, addItemsToBucket}) {


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
                     <div 
                     className="shop-items"
                      key={item.name + index} 
                     style={{
                        opacity: item.amount === 0 ? 0.5 : 1,
                        pointerEvents: item.amount === 0 ? 'none' : 'auto'

                     }}
                     
                     >
                    <img
                        className = "shop-item-logo"
                        src={item.link}
                        alt= "logo-item"
                    />
                   
                        <p className="shop-title">{item.name}</p>
                        <p className="shop-title">{item.model}</p>
                        <p>Осталось {item.amount}</p>
                        <button onClick={()=>addItemsToBucket(item.id)} >+ </button>
                    </div>
                ))
            }
        </main>
    );
}

export default mainContent;
