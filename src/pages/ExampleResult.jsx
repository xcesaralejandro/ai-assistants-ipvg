import { useLocation } from 'react-router';

// Este componente recibe el "estado" que se pasó desde la otra página con navigate().
// Usa useLocation() para acceder a ese state y recuperar el valor de la clave prompt que llegó.

// Si por alguna razón no llegó nada, muestra un mensaje por defecto.
// Ojito: este estado se pierde si se recarga la página, porque no se guarda en memoria persistente.
// En ocasiones el estado puede parecer que se mantiene al recargar la página, eso puede ser caché del navegador o
// react en modo desarrollo al utilizar vite. Por lo cual, no debes confiar en que el estado siempre estará disponible
// luego de recargar la pagina.

export default function ExampleResult() {
  const location = useLocation();
  const prompt = location.state?.prompt || 'No se recibió ningún estado.';

  return (
    <div className="container py-5">
      <h1 className="mb-4">Estado recibido:</h1>
      <div className="alert alert-secondary" role="alert">
        {prompt}
      </div>
    </div>
  );
}