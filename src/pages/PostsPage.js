import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "../store/postsReducer";
import {Link} from "react-router-dom";
import PostDetails from "./PostDetails";

function PostsPage() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.postsList)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div className="App">
            <Link style={{fontSize: "40px"}} to={'/'}>Main Page</Link>
            {posts &&
                <>
                    {posts.map(post => (
                            <>
                                <Link style={{color: "black", fontSize:"30px"}} to={`/posts/${post.id}`}>
                                    <p>
                                        {post.id}. {post.title}
                                    </p>
                                </Link>
                            </>
                        )
                    )}
                </>
            }
            <PostDetails/>
        </div>
    );
}

export default PostsPage;
