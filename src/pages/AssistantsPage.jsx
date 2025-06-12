import { Assistant } from '../components/Asistant';
import { assistants } from '../data/assistants';

export default function AssistantsPage(){
    return (
        <div className="container py-5">
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