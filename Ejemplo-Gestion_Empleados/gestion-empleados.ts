interface IEmpleado { //Creando los campos de la interfaz
    id: number;
    nombreCompleto: string;
    edad: number;
    departamento: string;
    salarioBruto: number;
    fechaContratacion: Date;
}
 
type DepartamentoValido = 'Desarrollo' | 'Marketing' | 'Recursos Humanos' | 'Administración';

class GestorEmpleados {
    private empleados: IEmpleado[] = [];

    public registrarEmpleado(id: number, nombreCompleto: string, edad:number, departamento:DepartamentoValido,
                             salarioBruto:number, fechaContratacion: Date ): string {
    
    if(edad<18 || edad>65){
        return 'La edad del empleado debe estar entre 18 y 65 años.';
    }
    if(salarioBruto<=0){
        return 'El salario bruto debe ser un número positivo.';
    }

    const empleadoExistente = this.empleados.find(empleado => empleado.id === id);
    if (empleadoExistente) {
        return `El empleado con ID ${id} ya está registrado.`;
    }

   const nuevoEmpleado: IEmpleado = {
        id,
        nombreCompleto,
        edad,
        departamento,
        salarioBruto,
        fechaContratacion

    };

    this.empleados.push(nuevoEmpleado);
    return `Empleado ${nombreCompleto} registrado exitosamente.`;
    
}
    public calcularSalarioNeto(salarioBruto:number): number {
        const porcentajeDescuenton = 0.13; // 13% de descuento
        const descuento = salarioBruto * porcentajeDescuenton;
        const salarioNeto = salarioBruto - descuento;
        return salarioNeto;
        
    }
    public mostrarResumenEmpleado(id:number): string {
        const empleado = this.empleados.find(emp => emp.id === id);
        if (!empleado) {
            return `Empleado con ID ${id} no encontrado.`;
        }   
        const salarioNeto = this.calcularSalarioNeto(empleado.salarioBruto);
        const fechaFormateada = empleado.fechaContratacion.toLocaleDateString('es-PE');
       
       
        return `================Resumen del Empleado====================:
        Nombre Completo: ${empleado.nombreCompleto}
        Edad: ${empleado.edad}
        Departamento: ${empleado.departamento}
        Salario Bruto: $${empleado.salarioBruto.toFixed(2)}
        Salario Neto: $${salarioNeto.toFixed(2)}
        Fecha de Contratación: ${fechaFormateada}
        =================================================================
        `;
 

    }

    public listarTodosEmpleados(): string {
        if (this.empleados.length === 0) {
            return 'No hay empleados registrados.';
        }
        let lista = '-----------------------Ver Lista de Empleados-----------------------\n';
        this.empleados.forEach((empleado, indice) => {
            const salarioNeto = this.calcularSalarioNeto(empleado.salarioBruto);
        
            lista += `${indice + 1}. ID: ${empleado.id}, Nombre: ${empleado.nombreCompleto}, Edad: ${empleado.edad}, Departamento: ${empleado.departamento}, Salario Bruto: $${empleado.salarioBruto.toFixed(2)}, Salario Neto: $${salarioNeto.toFixed(2)}, Fecha de Contratación: ${empleado.fechaContratacion.toLocaleDateString('es-PE')}\n`;
        }
        );

        lista += '---------------------------------------------------------------------';
        return lista;
}
}

console.log('-----------------------Gestión de Empleados-----------------------');
const gestor = new GestorEmpleados();
//Registrar Empleados
console.log("1. Registrando empleados...");
console.log(gestor.registrarEmpleado(1, 'Juan Pérez', 30, 'Desarrollo', 3000, new Date('2022-01-15')));
console.log(gestor.registrarEmpleado(2, 'María Gómez', 28, 'Marketing', 2800, new Date('2021-11-20')));
console.log(gestor.registrarEmpleado(3, 'Carlos Sánchez', 45, 'Recursos Humanos', 3500, new Date('2020-05-10')));
console.log(gestor.registrarEmpleado(1, 'Ana Torres', 32, 'Administración', 3200, new Date('2023-03-25'))); // ID duplicado

console.log("========================")

console.log("2. Provando validaciones...");
console.log(gestor.registrarEmpleado(4, 'Luis Ramírez', 17, 'Desarrollo', 2500, new Date('2023-06-01'))); // Edad inválida
console.log(gestor.registrarEmpleado(5, 'Sofía Fernández', 29, 'Marketing', -1500, new Date('2022-09-12'))); // Salario inválido

console.log("3. Mostrar Resumen ...");
console.log(gestor.mostrarResumenEmpleado(2));  // Resumen de María Gómez
console.log(gestor.mostrarResumenEmpleado(4));  // Empleado no encontrado

console.log("4. Listar todos los empleados...");
console.log(gestor.listarTodosEmpleados());
console.log('---------------------------------------------------------------------');
