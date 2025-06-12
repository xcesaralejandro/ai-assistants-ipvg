import { assistants } from '../data/assistants';
import { NavLink } from "react-router";

export default function AssistantsPage(){
    return (
        <div className="container py-5">
            <h1 className="text-center mb-5 fw-bold display-6">¿Con quien quieres hablar hoy?</h1>
            <div className="row justify-content-center">
                {assistants.map((assistant) => (
                    <div key={assistant.id} className="col-12 col-md-10 col-lg-8 mb-4">
                        <div className="card shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-4">
                            <div className="position-relative" style={{ width: "130px", height: "130px" }}>
                                <div className="avatar-background position-absolute top-0 start-0 w-100 h-100 rounded-circle"></div>
                                <img src={assistant.image} alt={assistant.name} className="rounded-circle position-relative"
                                    style={{ width: "130px", height: "130px", objectFit: "cover", zIndex: 1 }} />
                            </div>
                            <div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h5 className="fw-semibold mb-0">{assistant.name}</h5>
                                    <NavLink to={`/chat/${assistant.id}`}>
                                        <div  className="btn btn-outline-dark btn-sm rounded-pill d-inline-flex align-items-center gap-2 shadow-sm px-2 px-sm-4">
                                            <span style={{'minWidth': '120px'}}>Hablar con {assistant.name.toLowerCase()}</span>
                                            <i className="bi bi-chevron-right"></i>
                                        </div>
                                    </NavLink>
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
                <div className="d-flex justify-content-center mt-4 small">
                    <a className="text-muted" href="https://www.flaticon.es/iconos-gratis/avatar-de-hombre" target="__blank" title="avatars">Avatars creados por Royyan Wijaya - Flaticon</a>
                </div>
            </div>
        </div>
    );


}