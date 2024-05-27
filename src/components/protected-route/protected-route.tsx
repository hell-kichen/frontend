import {ReactNode} from 'react';
import {useNavigate} from "react-router-dom";

interface Props {
    children: ReactNode;
}

export default function ProtectedRoute({children}: Props): ReactNode {
    const navigate = useNavigate();
    if (localStorage.getItem("token") === null) {
        navigate('/signin')
    }
    return (
        children
    )
}