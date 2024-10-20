import Product from './Product'
import './ProductTab.css'
const ComponentName = () => {
    const price = [1800, 60000, 1500];
    const title = ['Mobile', 'Laptop', 'Earphone'];
    const description = ["D1", "D2", "D3"]
    return (
        <div className="product">
            {
                title.map((title, idx) => (
                    <Product key={idx} title={title} price={price[idx]} description={description[idx]}/>
                ))
            }
        </div>
    )
};
export default ComponentName;