import './checkout.css';
import {useCartContext} from '../../../context/CartContext'; 
import  { getFirestore , addDoc , collection} from 'firebase/firestore';
import {useState} from 'react'; 

const Checkout = () => {

    const [ id, setId ] = useState()
    const [checkout , setCheckout] = useState({
        name: '',
        email: '',
        message: '',
    });

    const  {shop, precioTotal, vaciarCarrito } = useCartContext();

    const enviarDatos = (e) => {
        e.preventDefault()
            if(checkout.name === '' && checkout.email === '') {
                alert("Completar todos los campos requeridos")
                }else{
                const db = getFirestore();
                const userCollection = collection(db, 'compra')
                    addDoc(userCollection, order).then(( res ) => {
                    alert('El formulario se envio correctamente')
                    setId(res.id)
                    vaciarCarrito();
                    })   
        } 
        }
        const getValue = (ev) => {
            const {value, name} = ev.target;
            setCheckout({...checkout, [name]:value})
        }
        const order = {
            checkout,
            items: shop.map(data => ({id:data.id, titulo: data.titulo, precio: data.precio, cantidad:data.cantidad})),
            total: precioTotal()
        }
    return (
    <form onSubmit={enviarDatos} className='formulario'>
        <div>
            <h4 className='form-title'>Formulario para la compra </h4>
            <label htmlFor='name'>Nombre: </label>
            <input
            name='name'
            id='name'
            value={checkout.name}
            onChange={getValue}
            className='input-group'
            ></input>
        </div>
        <div>
            <label htmlFor='email'>Email: </label>
            <input
                name='email'
                id='email'
                value={checkout.email}
                onChange={getValue}
                className='input-group'
            ></input>
        </div>
        <div>
            <label htmlFor='message'> Mensaje:</label>
            <textarea
            name='message'
            id='message'
            value={checkout.message}
            onChange={getValue}
            className='text-area'
            ></textarea>
        </div>
        <button type='submit'>Enviar formulario</button>
    </form>
    )
};

export default Checkout;