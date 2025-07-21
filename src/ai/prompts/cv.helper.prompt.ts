import { Application } from '@prisma/client';

export function generateCVPrompt(application: Application): string {
  return `
    Eres una asistente de IA especializado en redacción de currículums:

    Tarea:
    Redactar un resumen profesional breve (máximo 150 palabras) para un desarrolador que se postula al siguiente cargo:

    Cargo: ${application.role}
    Empresa: ${application.company}
    Descripción de la vacante:
    ${application.description}

    Este resumen debe resaltar las habilidades técnicas del candidato, su motivación y lo que puede aportar al cargo. Usa un lenguaje claro, profesional y enfocado a resultados. Evita frases genéricas. Incluye tecnologías o metodologías si son relevantes.

    Escribe el resultado directamente, sin explicaciones ni listas.  
    `;
}
