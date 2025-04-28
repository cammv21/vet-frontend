
export interface Veterinario {
    _id?: string;  // Esto es opcional, si el veterinario ya está guardado en la base de datos
    nombre: string;
    especialidad: string;
    telefono: string;
    email: string;
}