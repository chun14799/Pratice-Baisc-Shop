import Card from '../Card/Card';
import './main.scss'


const Main = (props) => {
    const { product, handleAdd, handleCancle } = props
    return (
        <div className="main">
            <h2>Products</h2>
            <div className="row">
                {product.map((val) => (
                    <Card key={val.id} val={val} handleAdd={handleAdd} handleCancle={handleCancle} className="col-4"></Card>
                ))}
            </div>
        </div>
    )
}

export default Main;