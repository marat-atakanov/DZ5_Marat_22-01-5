import {Link} from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <Link style={{fontSize: "40px"}} to={"posts"}>Posts</Link>
        </>
    )
}