import { useLocation } from "react-router-dom"

const MyPost = () => {
    const location = useLocation()
    return (
        <div>{location.obj.name}</div>
    )
}



export { MyPost } 
