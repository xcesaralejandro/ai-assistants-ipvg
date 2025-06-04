export default function AssistantsPage(){
    const assistants = [
     {
        id: 1,
        name: "Primer asistente",
        image : "https://placehold.co/400",
        category: "Comida",
        description: "primerooo"
     },
     {
        id: 2,
        name: "Segundo asistente",
        image : "https://placehold.co/400",
        category: "Peliculas",
        description: "segundoooooo"
     },
     {
        id: 3,
        name: "Tercer asistente",
        image : "https://placehold.co/400",
        category: "Deportes",
        description: "terceroooo"
     },
     {
        id: 4,
        name: "Cuarto asistente",
        image : "https://placehold.co/400",
        category: "Juegos",
        description: "cuarto"
     },
    ]
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
                            <div className="flex-grow-1">
                                <h5 className="fw-semibold mb-1">{assistant.name}</h5>
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
                                <div className="d-flex justify-content-end">
                                    <a href="#" className="btn btn-light btn-sm rounded-pill d-inline-flex align-items-center gap-2 shadow-sm px-4">
                                    <span className="fw-medium text-secondary">Hablar con este asistente</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                        className="text-secondary" style={{ transform: "translateY(1.5px)" }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


}