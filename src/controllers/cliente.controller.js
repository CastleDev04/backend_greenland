import prisma from "../db.js"

export const createClientes = async (req, res) =>{
    const {
        nombre,
        apellido,
        cedula,
        ruc,
        estadoCivil,
        profesion,
        nacionalidad,
        fechaNacimiento,
        email,
        telefono,
        direccion
    }= req.body;

    // Validar campos obligatorios
    if (!nombre || !apellido || !cedula || !email) {
        return res.status(400).json({ 
            message: "Campos obligatorios faltantes: nombre, apellido, cedula, email" 
        });
    }
    try {
        const data ={
            nombre,
            apellido,
            cedula,
            ruc,
            estadoCivil,
            profesion,
            nacionalidad,
            fechaNacimiento,
            email,
            telefono,
            direccion
        }

        const newCliente = await prisma.cliente.create({data});
        res.status(201).json({
            message: "Cliente creado exitosamente", 
            newCliente
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el cliente" });
    }
}

export const getClientes = async (req,res)=>{
    try {
        const clientes = await prisma.cliente.findMany();
        res.status(200).json({
            message:"Clientes obtenidos con exitos",
            clientes
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los clientes" });
    }
}

export const getClienteById = async (req,res)=>{
    const {id} = req.params;
    // Validar que el ID sea un número válido
    if (isNaN(parseInt(id))) {
        return res.status(400).json({ message: "ID inválido" });
    }
    try {
        const cliente = await prisma.cliente.findUnique({
            where :{
                id: parseInt(id)
            }
        })
        if(!cliente){
            return res.status(404).json({message: "Cliente no encontrado"});
        }

        return res.status(200).json({
            messahe:"Cliente obtenido con exito",
            cliente
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener el cliente" });
    }
}

export const updateClienteById = async (req, res) => {
    const { id } = req.params;
    const {
        nombre,
        apellido,
        cedula,
        ruc,
        estadoCivil,
        profesion,
        nacionalidad,
        fechaNacimiento,
        email,
        telefono,
        direccion
    } = req.body;

    // Validar que el ID sea un número válido
    if (isNaN(parseInt(id))) {
        return res.status(400).json({ message: "ID inválido" });
    }

    // Validar campos obligatorios en la actualización
    if (!nombre || !apellido || !cedula || !email) {
        return res.status(400).json({ 
            message: "Campos obligatorios faltantes: nombre, apellido, cedula, email" 
        });
    }

    try {
        // Verificar si el cliente existe antes de actualizar
        const clienteExistente = await prisma.cliente.findUnique({
            where: { id: parseInt(id) }
        });

        if (!clienteExistente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        const data = {
            nombre,
            apellido,
            cedula,
            ruc: ruc || null,
            estadoCivil: estadoCivil || null,
            profesion: profesion || null,
            nacionalidad: nacionalidad || null,
            fechaNacimiento: fechaNacimiento ? new Date(fechaNacimiento) : null,
            email,
            telefono: telefono || null,
            direccion: direccion || null
        }

        const cliente = await prisma.cliente.update({
            where: { id: parseInt(id) },
            data
        });

        return res.status(200).json({
            message: "Cliente actualizado con éxito",
            cliente
        });
    } catch (error) {
        console.error("Error en updateClienteById:", error);
        
        // Manejar errores específicos
        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        
        if (error.code === 'P2002') {
            return res.status(400).json({ 
                message: "La cédula o email ya existen en el sistema" 
            });
        }
        
        res.status(500).json({ message: "Error al actualizar el cliente" });
    }
}

export const deleteClienteById = async (req,res)=>{
    const {id} = req.params;
    // Validar que el ID sea un número válido
    if (isNaN(parseInt(id))) {
        return res.status(400).json({ message: "ID inválido" });
    }
    try {
        await prisma.cliente.delete({
            where:{
                id: parseInt(id)
            }
        });
        return res.status(200).json({message: "Cliente eliminado con exito"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el cliente" });
    }
}