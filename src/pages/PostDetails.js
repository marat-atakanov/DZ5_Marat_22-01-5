import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

export default function PostDetails() {
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(resp => setPost(resp.data))
    })

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            {post &&
                <>
                    <p style={{color: "black", fontSize: "30px"}} onClick={goBack}>{post.id} {post.body}</p>
                </>
            }
        </>
    )
}