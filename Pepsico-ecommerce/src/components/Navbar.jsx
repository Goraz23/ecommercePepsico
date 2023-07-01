import {Link , Outlet} from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="bg-white dark:bg-[#242424] dark:text-white text-black fixed top-0 left-0 w-full flex flex-row justify-between px-20 py-4 items-center">
        <div>
            <h1 className="text-2xl font-semibold">
            <Link to ={""}>
                <span className="text-black dark:text-white">PEPSICO</span>
            </Link>
            </h1>
        </div>
    </div>
    <div className="flex flex-row">
        <div className="flex flex-row border-2 p-2 rounded-xl gap-2">
            <box-ixon className="search" color="grey"></box-ixon>
            <input 
                className="bg-white outline-none dark:bg-[#242424] dark:text-white"
                type="search"
                placeholder="Buscar"
            ></input>
        </div>
    </div>
    <div className="flex flex-row items-center px-4 gap-4">
        <box-icon name="cart"></box-icon>
        <box-icon name="cart"></box-icon>
    </div>
    </>
  );
}

