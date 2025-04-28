import { useState } from 'react';

interface VeterinarioFormProps {
    onAddVeterinario: () => Promise<void>; 
    url: string;
}

const VeterinarioForm = ({ onAddVeterinario, url }: VeterinarioFormProps) => {
    const [nombre, setNombre] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const nuevoVeterinario = { nombre, especialidad, telefono, email };
        console.log('Nuevo veterinario:', nuevoVeterinario); // Para depuración

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevoVeterinario),
            });
            console.log('Respuesta del servidor:', response); // Para depuración
            if (response.ok) {
                location.reload()
            } else {
                const data = await response.json();
                console.error(data.error);
            }
        } catch (error) {
            console.error('Error al crear el veterinario:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800">Agregar Veterinario</h2>

            {/* Nombre */}
            <div className="flex flex-col">
                <label htmlFor="nombre" className="text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    placeholder="Nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="input px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            {/* Especialidad */}
            <div className="flex flex-col">
                <label htmlFor="especialidad" className="text-sm font-medium text-gray-700 mb-1">Especialidad</label>
                <input
                    type="text"
                    id="especialidad"
                    placeholder="Especialidad del veterinario"
                    value={especialidad}
                    onChange={(e) => setEspecialidad(e.target.value)}
                    required
                    className="input px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col">
                <label htmlFor="telefono" className="text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                    type="text"
                    id="telefono"
                    placeholder="Teléfono de contacto"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                    className="input px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            {/* Email */}
            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
                <button type="submit" className="btn px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Agregar Veterinario
                </button>
            </div>
        </form>
    );
};

export default VeterinarioForm;
