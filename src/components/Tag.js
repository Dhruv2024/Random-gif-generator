import { useState } from "react";
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {
    const [tag, setTag] = useState()
    const { gif, loading, fetchData } = useGif(tag);

    function clickHandler() {
        fetchData(tag);
    }
    function changeHandler(event) {
        setTag(event.target.value)
    }
    return (
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <div className="w-full h-fit text-center">
                <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} GIF</h1>
            </div>


            {
                loading ? (<Spinner />) : (<img src={gif} width="450" alt="gif" />)
            }

            <input
                className="w-8/12 h-10 text-center"
                onChange={changeHandler}
                value={tag}
                name="text"
                placeholder="Enter something "
            />

            <button className="w-10/12 bg-blue-100 text-lg py-2 rounded-lg mb-[20px]" onClick={clickHandler}>
                Generate
            </button>
        </div>
    )
}

export default Tag;