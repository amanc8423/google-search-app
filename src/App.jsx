import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
    return <div>
    
    
    <BrowserRouter>
<Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/" exact element={<SearchResult/>}/>

</Routes>


    </BrowserRouter>
    
    
    
    </div>;
}

export default App;
