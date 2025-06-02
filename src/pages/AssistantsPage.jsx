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
    return <>
        <div className="container">
            <h1>Soy la pagina de los asistentes</h1>
            { 
                assistants.map(assistant => {
                    return <div className="card mb-4">
                    <h5 className="card-header">{assistant.name}</h5>
                    <div className="card-body">
                        <div className="d-flex gap-4">
                            <img className="mr-4" src={assistant.image} width={100} height={100} />
                            <div>
                                <h5 className="card-title">{assistant.category}</h5>
                                <p className="card-text">{assistant.description}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>    
                        </div>
                    </div>
                    </div>
                }) 
            }
        </div>
    </>
}