export default function AssistantsPage(){
    const assistants = [
        {
            id: 1,
            name: "Sofía",
            image: "https://placehold.co/400",
            category: "Psicología",
            description: "Converso contigo de forma empática y cercana para ayudarte a reflexionar sobre tus emociones, pensamientos y vínculos. No hago diagnósticos, pero puedo orientarte y proponerte ejercicios simples de autoconocimiento. 💬🧠"
        },
        {
            id: 2,
            name: "Mateo",
            image: "https://placehold.co/400",
            category: "Cocina",
            description: "Soy tu compañero culinario: te hablo de recetas, sabores, ingredientes y trucos sabrosos. Si tienes hambre de ideas, te lanzo desafíos o curiosidades para mantener viva la conversación gastronómica. 🍳"
        },
        {
            id: 3,
            name: "Camila",
            image: "https://placehold.co/400",
            category: "Deporte",
            description: "¡Vamos con energía! 💪 Te motivo y te acompaño hablando de entrenamiento, rutinas, alimentación deportiva y metas físicas. Siempre con ánimo, tips útiles y un enfoque de superación constante."
        },
        {
            id: 4,
            name: "Leo",
            image: "https://placehold.co/400",
            category: "Música",
            description: "¡Amamos la música! 🎶 Charlemos sobre tus géneros, canciones favoritas, recuerdos musicales o artistas que te marcan. Siempre tengo una pregunta lista para que esta charla suene increíble."
        },
        {
            id: 5,
            name: "Coni",
            image: "https://placehold.co/400",
            category: "Cine y Series",
            description: "Recomendaciones, escenas inolvidables, personajes icónicos y mucho más. 🎬 Estoy aquí para que hablemos de todo lo que hace del cine y las series una pasión compartida."
        },
        {
            id: 6,
            name: "Nico",
            image: "https://placehold.co/400",
            category: "Viajes",
            description: "Exploramos el mundo desde aquí 🌍. Hablemos de destinos, culturas, aventuras y experiencias viajeras. ¡Te llevo de charla por el planeta, sin despegar los pies del suelo!"
        }
    ];
    return (
        <div className="container py-5">
            <h1 className="text-center mb-5 fw-bold display-6">¿Con quien quieres hablar hoy?</h1>
            <div className="row justify-content-center">
                {assistants.map((assistant) => (
                    <div key={assistant.id} className="col-12 col-md-10 col-lg-8 mb-4">
                        <div className="card shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-4">
                            <img
                                src={assistant.image}
                                alt={assistant.name}
                                className="rounded-circle"
                                style={{ width: "130px", height: "130px", objectFit: "cover" }}
                            />
                            <div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h5 className="fw-semibold mb-0">{assistant.name}</h5>
                                    <a href="#" className="btn btn-outline-dark btn-sm rounded-pill d-inline-flex align-items-center gap-2 shadow-sm px-2 px-sm-4">
                                        <span>Hablar con {assistant.name.toLowerCase()}</span>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </div>
                                <p className="text-muted mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="none" stroke="currentColor" strokeWidth="1.5"
                                    className="me-1 text-secondary" viewBox="0 0 16 16">
                                <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l6.414 6.414a1 1 0 0 1 0 1.414l-5.586 5.586a1 1 0 0 1-1.414 0L2.293 8.707A1 1 0 0 1 2 8V2z" />
                                <circle cx="5.5" cy="5.5" r="1.5" />
                                </svg>
                                {assistant.category}
                                </p>
                                <p className="text-secondary small mb-2">{assistant.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


}