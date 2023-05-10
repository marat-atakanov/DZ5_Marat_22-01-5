import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import PostDetails from "./pages/PostDetails";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="posts" element={<PostsPage/>}/>
                <Route path="posts/:id" element={<PostDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
