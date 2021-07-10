import '../../App.css';

const Bucket = (props) =>{

    const { bucketitems, deleteItemFromBucket } = props;

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
              bucketitems.map((item, index) => (
                  <div className="shop-items" key={item.id}>
                        <img
                        className = "shop-item-logo"
                        src={item.link}
                        alt= "logo-item"
                    />
                      <p className="shop-title">{item.name}</p>
                      <p className="shop-title">{item.model}</p>
                      <p className="shop-title">Amount: {item.amount}</p>
                      <button onClick={()=>deleteItemFromBucket(item.id)} > удалить из корзины  </button>
                  </div>
              ))
          }
      </main>
  );

    
}

export default Bucket;