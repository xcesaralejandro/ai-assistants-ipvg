import { Assistant } from '../components/Asistant';
import { assistants } from '../data/Assistants';
import { useNavigate } from 'react-router';

export default function AssistantsPage(){
    const navigate = useNavigate();

    // El `state` es como una "mochila" de datos que va puesta en la navegación,
    // y se puede leer en el destino para recuperar datos puestos en dicha mochila. Para eso debes usar `useLocation().state`.
    // Ojito: el state no se guarda si recargas la página, porque no vive en la URL ni en el localStorage.

    // Navigate() es el equivalente a NavLink, pero en vez de renderizar un enlace en JSX,
    // se usa para redirigir a otra página programáticamente (desde JS navigate(), desde JSX NavLink).
    const llamarApiYNavegar = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
            const data = await response.json();
            let prompt = 'Desde ahora eres un pokemon y tus tipos son: ';
            prompt += data.types.map(item => item.type.name).join(', ');
            prompt += ' responde solo esa información y no inventes nada más.';
            console.log('Redirigiendo a example-result con el prompt: ', prompt);
            navigate('/example-result', { state: { 'prompt': prompt } });
        } catch (error) {
            console.error('Error al consumir la API:', error);
        }
    };

    return (
        <div className="container py-5">
            <div className='mb-4 d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={llamarApiYNavegar}>
                    Consumir una api y redirigir a otra página con estado
                </button>
            </div>
            <h1 className="text-center mb-5 fw-bold display-6">¿Con quien quieres hablar hoy?</h1>
            <div className="row justify-content-center">
                {assistants.map((assistant) => (
                    <Assistant key={assistant.id} id={assistant.id} name={assistant.name} category={assistant.category} 
                        image={assistant.image} description={assistant.description} />
                ))}
                <div className="d-flex justify-content-center mt-4 small">
                    <a className="text-muted" href="https://www.flaticon.es/iconos-gratis/avatar-de-hombre" target="__blank" title="avatars">Avatars creados por Royyan Wijaya - Flaticon</a>
                </div>
            </div>
        </div>
    );

}