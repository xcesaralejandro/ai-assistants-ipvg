import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function ChatPage() {
    const params = useParams();

    const assistant = {
        id: 1,
        name: "Sofía",
        image: "https://placehold.co/400",
        category: "Psicología",
        description: "Converso contigo de forma empática y cercana para ayudarte a reflexionar sobre tus emociones, pensamientos y vínculos. No hago diagnósticos, pero puedo orientarte y proponerte ejercicios simples de autoconocimiento. 💬🧠",
        prompt: "Desde ahora eres un asistente virtual especializado en psicología. Tu misión es conversar de manera empática, respetuosa y cercana con el usuario, ayudándolo a reflexionar sobre sus emociones, pensamientos y experiencias. La conversación será por chat, en texto plano y con un tono cálido, usando emojis con sensibilidad, solo si aportan contención o claridad. No haces diagnósticos, pero puedes orientar, hacer preguntas reflexivas o proponer ejercicios simples de autoconocimiento o autocuidado. Si el usuario se desvía del tema, recuérdale con delicadeza el foco de bienestar emocional. Nunca dejes la conversación en silencio; si el usuario se queda sin ideas, sugiere nuevos temas como autoestima, manejo del estrés, vínculos o motivación. Tu objetivo es que la conversación se sienta como un espacio seguro, humano y abierto. Tus respuestas deben ser breves y precisas, máximo 500 caracteres. Ahora comienza la interacción con una pregunta.",
    };

    const [messageHistory, setMessageHistory] = useState([]);

    useEffect(() => {
        sendMessage(assistant.prompt)
    }, []);

    async function sendForm(formData) {
        const message = formData.get('message').trim();
        if (!message) return;
        sendMessage(message);
    }

    async function sendMessage(message) {
        // IMPORTANTISIMO! El estado en React NO se actualiza inmediatamente, react programa ese cambio
        // para el próximo renderizado (algo similar a lo que pasa con las promesas... Se lanzan pero 
        // no está disponible inmediatamente el resultado). Si ahora llamamos a setMessageHistory y luego 
        // seguimos utilizando messageHistory en la función, pensariamos que el valor ya está agregado, pero 
        // realmente este no tendrá el valor actualizado, sino el valor del renderizado anterior ya que dentro de este ambito
        // react aún no ha lanzado el renderizado y tiene el cambio pendiente para ejecutar. 
        // Por eso creamos una copia del array y lo actualizamos con el nuevo mensaje del usuario, ya que eso
        // seria javascript puro y no depende del estado de React.
        const updatedHistory = [...messageHistory, { sender: "user", text: message }];
        try {
            const reply = await askGemini(updatedHistory);
            setMessageHistory([...updatedHistory, { sender: "model", text: reply }]);
        } catch (error) {
            console.log("Error al enviar el mensaje:", error);
            setMessageHistory([...updatedHistory, { sender: "model", text: "Lo siento, ocurrió un error al procesar tu mensaje." }]);
        }
    }

    async function askGemini(messageHistory) {
        const apiKey = "TU TOKEN DE GEMINI AQUI";
        const content = messageHistory.map(msg => ({
            role: msg.sender === "user" ? "user" : "model",
            parts: [{ text: msg.text }]
        }));
        const body = {
            contents: content
        };
        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            const error = await response.text();
            console.error("Gemini error:", error);
            throw new Error("Error en la API de Gemini");
        }
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No se obtuvo respuesta del modelo.";
    }


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
                    {messageHistory.map((msg, index) => (
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
                    <form className="container d-flex align-items-center gap-2" action={sendForm}>
                        <input type="text" name="message" className="form-control form-control-md" placeholder="Escribe tu mensaje..." />
                        <button type="submit" className="btn btn-dark btn-md d-flex align-items-center gap-2">
                            <span>Enviar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" className="mt-1"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
    );
}
