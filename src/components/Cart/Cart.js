import Name from '../Name/Name';
import './Cart.css';
// font awesome file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cricketer = props.cricketer;
    const total = cricketer.reduce((total, element) => total + element.salary, 0);
    return (
        <div className="cart">
            <h3>The final squad</h3>
            <h4>Players: {cricketer.length}</h4>
            {
                cricketer.map(item => <Name item={item}></Name>)
            }
            <h5>Total Budget: <FontAwesomeIcon icon={faDollarSign}/>{total}</h5>
        </div>
    );
};

export default Cart;