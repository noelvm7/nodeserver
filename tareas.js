const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

const tareas = [];

function agregarTarea() {
rl.question("Descripción de la tarea: ", (descripcion) => {
    const tarea = {
    indicador: tareas.length + 1,
    descripcion,
    completada: false,
    };
    tareas.push(tarea);
    console.log(`Tarea agregada: ${descripcion}`);
    mostrarMenu();
});
}

function eliminarTarea() {
rl.question("Indicador de la tarea a eliminar: ", (indicador) => {
    const tareaIndex = tareas.findIndex(
    (tarea) => tarea.indicador === parseInt(indicador)
    );
    if (tareaIndex !== -1) {
    tareas.splice(tareaIndex, 1);
    console.log(`Tarea ${indicador} eliminada.`);
    } else {
    console.log(`No se encontró una tarea con el indicador ${indicador}.`);
    }
    mostrarMenu();
});
}

function completarTarea() {
rl.question("Indicador de la tarea completada: ", (indicador) => {
    const tarea = tareas.find((t) => t.indicador === parseInt(indicador));
    if (tarea) {
    tarea.completada = true;
    console.log(`Tarea ${indicador} marcada como completada.`);
    } else {
    console.log(`No se encontró una tarea con el indicador ${indicador}.`);
    }
    mostrarMenu();
  });
}

function mostrarTareas() {
console.log("Lista de tareas:");
tareas.forEach((tarea) => {
    console.log(
    `[${tarea.indicador}] ${tarea.descripcion} - ${
        tarea.completada ? "Completada" : "Pendiente"
    }`
    );
});
mostrarMenu();
}

function mostrarMenu() {
console.log("\nOpciones:");
console.log("1. Agregar tarea");
console.log("2. Eliminar tarea");
console.log("3. Completar tarea");
console.log("4. Mostrar tareas");
console.log("5. Salir");

rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
    case "1":
        agregarTarea();
        break;
    case "2":
        eliminarTarea();
        break;
    case "3":
        completarTarea();
        break;
    case "4":
        mostrarTareas();
        break;
    case "5":
        rl.close();
        break;
    default:
        console.log("Opción no válida. Intente de nuevo.");
        mostrarMenu();
        break;
    }
});
}

console.log("Bienvenido a la Lista de Tareas\n");
mostrarMenu();
