import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <form onSubmit={handleConfirm}>
            <div className="mb-4">
              <label className="block text-verde-agua text-lg font-semibold">
                Nombre
              </label>
              <input
                type="text"
                value={name}
                onChange={({ target }) => setName(target.value)}
                className="w-full px-3 py-2 border border-verde-agua rounded-md focus:ring focus:ring-verde-agua focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-verde-agua text-lg font-semibold">
                Teléfono
              </label>
              <input
                type="text"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
                className="w-full px-3 py-2 border border-verde-agua rounded-md focus:ring focus:ring-verde-agua focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-verde-agua text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                className="w-full px-3 py-2 border border-verde-agua rounded-md focus:ring focus:ring-verde-agua focus:outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-verde-agua text-white py-2 px-4 rounded-md hover:bg-dark-verde-agua focus:ring focus:ring-verde-agua focus:outline-none"
              >
                Crear Orden
              </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default CheckoutForm;