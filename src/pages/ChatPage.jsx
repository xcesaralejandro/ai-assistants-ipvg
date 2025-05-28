import { useParams } from "react-router";

export default function ChatPage(){
    const params = useParams();
    console.log("url params", params)
    return <div>
        <h1>Vas a utilizar el asistente: {params.assistant_id}</h1>
    </div>;
}