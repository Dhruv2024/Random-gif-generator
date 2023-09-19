import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
    return (
        <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
            <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] mb-[10px] text-3xl font-bold px-10">Random GIFS</h1>
            <div className="flex flex-col w-full items-center">
                <Random />
                <Tag />
            </div>
        </div>

    )
}

export default App;