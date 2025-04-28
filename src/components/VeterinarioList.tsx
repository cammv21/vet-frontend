import { useEffect, useState } from 'react';
import type { Veterinario } from '../types/Veterinario'; 


interface VeterinariosListProps {
    key ?: number; // Esto es opcional, si el veterinario ya está guardado en la base de datos
    url: string;

}

const VeterinariosList = ({ url }: VeterinariosListProps)  => {
    const [veterinarios, setVeterinarios] = useState<Veterinario[]>([]); 
    useEffect(() => {   
        const fetchVeterinarios = async () => {
            try {
                const response = await fetch(url); 
                const data = await response.json();console.log('Datos obtenidos:', data); 
                setVeterinarios(data); 
            } catch (error) {
                console.error('Error al obtener veterinarios:', error);
            }
        };
    
        fetchVeterinarios(); 
    }, []);
    

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Lista de Veterinarios</h2>

            <ul className="space-y-4">
                {veterinarios.map((veterinario) => (
                    <li
                        key={veterinario._id}
                        className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                    >
                        <div>
                            <h3 className="text-lg font-medium text-gray-700">{veterinario.nombre}</h3>
                            <p className="text-sm text-gray-500">{veterinario.especialidad}</p>
                        </div>
                        <button
                            onClick={() => console.log(`Eliminar veterinario: ${veterinario._id}`)}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VeterinariosList;
