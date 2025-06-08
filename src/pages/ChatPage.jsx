import { useParams } from "react-router";

export default function ChatPage() {
    const params = useParams();

    const assistant = {
        id: 1,
        name: "Sofía",
        image: "https://placehold.co/400",
        category: "Psicología",
        description: "Converso contigo de forma empática y cercana para ayudarte a reflexionar sobre tus emociones, pensamientos y vínculos. No hago diagnósticos, pero puedo orientarte y proponerte ejercicios simples de autoconocimiento. 💬🧠"
    };

    const messages = [
        { sender: "model", text: "Hola, ¿cómo te sientes hoy?" },
        { sender: "user", text: "Un poco ansioso la verdad..." },
        { sender: "model", text: "Gracias por compartirlo, ¿quieres que exploremos juntos qué podría estar causándolo?" }
    ];

    return (
        <div className="vh-100 d-flex flex-column">
            <div className="border-bottom p-3 bg-white shadow-sm">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                        <img src={assistant.image} alt={assistant.name} className="rounded-circle" style={{ width: "60px", height: "60px" }} />
                        <div>
                            <h5 className="mb-0">{assistant.name}</h5>
                            <small className="text-muted">Especialista en {assistant.category.toLowerCase()}</small>
                        </div>
                    </div>
                    <button className="btn btn-outline-dark btn-md">Cambiar de asistente</button>
                </div>
            </div>
            <div className="flex-grow-1 overflow-auto bg-light py-3">
                <div className="container">
                    {messages.map((msg, index) => (
                        <div key={index} className={`d-flex mb-3 ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
                            <div className={`p-3 border rounded ${msg.sender === "user" ? "bg-success bg-opacity-10 text-end" : "bg-white"}`}
                                style={{ maxWidth: "75%" }}>
                                <strong className="d-block mb-1">
                                    {msg.sender === "user" ? "Tú" : assistant.name}
                                </strong>
                                <span>{msg.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-top p-3 bg-white">
                <div className="container d-flex align-items-center gap-2">
                    <input type="text" className="form-control form-control-md" placeholder="Escribe tu mensaje..." />
                    <button className="btn btn-dark btn-md d-flex align-items-center gap-2">
                        <span>Enviar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" className="mt-1"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                        </button>
                </div>
            </div>
        </div>
    );
}
