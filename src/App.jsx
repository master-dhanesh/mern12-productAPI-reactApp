import React, { useEffect } from "react";
import Home from "./components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { asyncsetdata } from "./store/actions/productActions";

const App = () => {
    const { search, pathname } = useLocation();
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.products);

    useEffect(() => {
        if (data.length === 0) {
            dispatch(asyncsetdata());
        }
    }, []);

    return (
        <div className="h-screen w-screen flex ">
            {(pathname != "/" || search.length > 0) && (
                <Link
                    to="/"
                    className="text-blue-300 absolute left-[45%] border-zinc-900 border rounded font-medium text-2xl py-1 px-4 mt-[2%]"
                >
                    <AiOutlineHome />
                </Link>
            )}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </div>
    );
};

export default App;
