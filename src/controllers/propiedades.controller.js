import bcrypt from "bcrypt"
import prisma from "../db.js"


export const createPropiedades = async (req, res) =>{
    const {
  fraccionamiento,
  distrito,
  finca,
  padron,
  cuentaCatastral,
  manzana,
  lote,
  loteamiento,
  superficie,
  precioTotal,
  modalidadPago,
  cuotas,
  montoCuota,
  estadoVenta,
  entregado,
  amojonado,
  limpio,
  tieneConstruccion,
  aguaPotable,
  energiaElectrica,
  calle,
  seguridad,
  beneficiosComunes,
  requiereExpensas,
  expensas,
  restriccionConstrucion,
  latitud,
  longitud,

  // Linderos
  linderoNorteMedida,
  linderoSurMedida,
  linderoEsteMedida,
  linderoOesteMedida,
  linderoNorteCon,
  linderoSurCon,
  linderoEsteCon,
  linderoOesteCon,
  linderoNorteCalle,
  linderoSurCalle,
  linderoEsteCalle,
  linderoOesteCalle,

  // Relación con cliente
  compradorId
} = req.body

if (!fraccionamiento || !distrito || !superficie) {
        return res.status(400).json({ 
            message: "Campos obligatorios faltantes: fraccionamiento, distrito, superficie" 
        });
    }

try {
        const data = {
            fraccionamiento,
            distrito,
            finca,
            padron,
            cuentaCatastral,
            manzana,
            lote,
            loteamiento,
            superficie,
            precioTotal,
            modalidadPago,
            cuotas,
            montoCuota,
            estadoVenta,
            entregado,
            amojonado,
            limpio,
            tieneConstruccion,
            aguaPotable,
            energiaElectrica,
            calle,
            seguridad,
            beneficiosComunes,
            requiereExpensas,
            expensas,
            restriccionConstrucion,
            latitud,
            longitud,

            // Linderos
            linderoNorteMedida,
            linderoSurMedida,
            linderoEsteMedida,
            linderoOesteMedida,
            linderoNorteCon,
            linderoSurCon,
            linderoEsteCon,
            linderoOesteCon,
            linderoNorteCalle,
            linderoSurCalle,
            linderoEsteCalle,
            linderoOesteCalle,
        };

        // Conectar con comprador si se proporciona
        if (compradorId) {
            data.comprador = {
                connect: { id: compradorId }
            };
        }

        const propiedad = await prisma.lote.create({
            data,
            include: {
                comprador: true // Incluir datos del comprador en la respuesta
            }
        });

        return res.status(201).json({ 
            message: "Propiedad creada correctamente", 
            propiedad 
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error al crear la propiedad" });
    }
}

export const getPropiedades = async (req, res) =>{
    try {
        const propiedades = await prisma.lote.findMany({
            // include: {
            //     comprador: true // Incluye los datos del cliente relacionado
            // }
        });
        return res.status(200).json(propiedades);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error al obtener las propiedades" });
    }
}

export const getPropiedadById = async (req, res) =>{
    const { id } = req.params;
    // Validar que el ID sea un número válido
    if (isNaN(parseInt(id))) {
        return res.status(400).json({ message: "ID inválido" });
    }

    try {
        const propiedad = await prisma.lote.findUnique({
            where: { id: parseInt(id) },
            include: {
                comprador: true
            }
        });

        if (!propiedad) {
            return res.status(404).json({ message: "Propiedad no encontrada" });
        }

        return res.status(200).json(propiedad);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error al obtener la propiedad" });
    }
}

export const updatePropiedadById =async (req, res) =>{
    const { id } = req.params;
    const {
  fraccionamiento,
  distrito,
  finca,
  padron,
  cuentaCatastral,
  manzana,
  lote,
  loteamiento,
  superficie,
  precioTotal,
  modalidadPago,
  cuotas,
  montoCuota,
  estadoVenta,
  entregado,
  amojonado,
  limpio,
  tieneConstruccion,
  aguaPotable,
  energiaElectrica,
  calle,
  seguridad,
  beneficiosComunes,
  requiereExpensas,
  expensas,
  restriccionConstrucion,
  latitud,
  longitud,

  // Linderos
  linderoNorteMedida,
  linderoSurMedida,
  linderoEsteMedida,
  linderoOesteMedida,
  linderoNorteCon,
  linderoSurCon,
  linderoEsteCon,
  linderoOesteCon,
  linderoNorteCalle,
  linderoSurCalle,
  linderoEsteCalle,
  linderoOesteCalle,

  // Relación con cliente
  compradorId
} = req.body

// Validar que el ID sea un número válido
    if (isNaN(parseInt(id))) {
        return res.status(400).json({ message: "ID inválido" });
    }
    try {
        const data = {
            fraccionamiento,
            distrito,
            finca,
            padron,
            cuentaCatastral,
            manzana,
            lote,
            loteamiento,
            superficie,
            precioTotal,
            modalidadPago,
            cuotas,
            montoCuota,
            estadoVenta,
            entregado,
            amojonado,
            limpio,
            tieneConstruccion,
            aguaPotable,
            energiaElectrica,
            calle,
            seguridad,
            beneficiosComunes,
            requiereExpensas,
            expensas,
            restriccionConstrucion,
            latitud,
            longitud,

            // Linderos
            linderoNorteMedida,
            linderoSurMedida,
            linderoEsteMedida,
            linderoOesteMedida,
            linderoNorteCon,
            linderoSurCon,
            linderoEsteCon,
            linderoOesteCon,
            linderoNorteCalle,
            linderoSurCalle,
            linderoEsteCalle,
            linderoOesteCalle,
        };

        // Manejar relación con comprador
        if (compradorId) {
            data.comprador = {
                connect: { id: compradorId }
            };
        }

        const propiedad = await prisma.lote.update({
            where: { id: parseInt(id) },
            data,
            include: {
                comprador: true
            }
        });

        return res.status(200).json({ 
            message: "Propiedad actualizada correctamente", 
            propiedad 
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error al actualizar la propiedad" });
    }
}


export const deletePropiedadById = async (req, res) => {
    const { id } = req.params;
    
    // Validar que el ID sea un número válido
    if (isNaN(parseInt(id))) {
        return res.status(400).json({ message: "ID inválido" });
    }

    try {
        await prisma.lote.delete({
            where: { id: parseInt(id) }
        });
        
        return res.status(200).json({ message: "Propiedad eliminada correctamente" });
    } catch (err) {
        console.error(err);
        
        // Manejar caso específico cuando el registro no existe
        if (err.code === 'P2025') {
            return res.status(404).json({ message: "Propiedad no encontrada" });
        }
        
        return res.status(500).json({ message: "Error al eliminar la propiedad" });
    }
}
