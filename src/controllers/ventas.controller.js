import prisma from "../db"; 

export const createVentas = async (req,res)=>{
    const {
        montoTotal,
        estado,
        tipoPago,
        cantidadCuotas,
        montoCuota,
        cuotasPagadas, 
        clienteId,
        loteId
    }=req.body;

    if(!montoTotal || !estado || !tipoPago || !clienteId || !loteId){
        return res.status(400).json({
            message: "Campos obligatorios faltantes: montoTotal, estado, tipoPago, clienteId, loteId"
        });
    }

    try {
        const data = {
            montoTotal,
            estado,
            tipoPago,
            cantidadCuotas,
            montoCuota,
            cuotasPagadas, 
            clienteId,
            loteId
        }

        const newVenta = await prisma.venta.create({data});
        res.status(201).json({
            message: "Venta creada exitosamente",
            newVenta
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear la venta" });
    }
}

export const getVentas = async (req,res)=>{
    try {
        const ventas =  await prisma.venta.findMany();
        res.status(200).json({
            message: "Ventas obtenidas con exito",
            ventas
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las ventas" });
    }
}

export const getVentaById = async (req,res)=>{
    const {id} = req.params;
    try {
        const venta = await prisma.venta.findUnique({
            where: { id: parseInt(id) }
        });
        if (!venta) {
            return res.status(404).json({ message: "Venta no encontrada" });
        }
        res.status(200).json({
            message: "Venta obtenida con exito",
            venta
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener la venta" });
    }
}

export const updateVentaById = async (req,res)=>{
    const {id} = req.params;
    const{
        montoTotal,
        estado,
        tipoPago,
        cantidadCuotas,
        montoCuota,
        cuotasPagadas, 
        clienteId,
        loteId
    }=req.body;
    try {
        const data ={
            montoTotal,
            estado,
            tipoPago,
            cantidadCuotas,
            montoCuota,
            cuotasPagadas, 
            clienteId,
            loteId            
        }
        const venta = await prisma.venta.update({
            where: { id: parseInt(id)},
            data
        }) 
        res.status(200).json({
            message: "Venta actualizada con exito",
            venta
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar la venta" });
    }
}

export const deleteVentaById = async (req,res)=>{
    const {id} = req.params;
    try {
        await prisma.venta.delete({
            where: { id: parseInt(id) }
        });
        res.status(200).json({ message: "Venta eliminada con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la venta" });
    }  
}