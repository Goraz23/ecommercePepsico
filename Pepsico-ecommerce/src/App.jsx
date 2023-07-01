// import { Link } from "react-router-dom";
// import Card from "./components/Card";
// import Navbar from "./components/Navbar";
// import "boxicons";
// import CardAlimentos from "./components/CardAlimentos.jsx";

// export default function App () {
//   return (
//     <div className="">
//       <div className="bg-fondo bg-blue-500 p-10 flex flex-col items-center justify-center gap-16 rounded-2xl h-[30rem] max-w-6xl m-auto">
//       <h1 className="text-white font-semibold text-center">Los mejores productos para tu mercado</h1>
//       <button className="bg-gray-200">Comprar</button>
//       </div>
//     </div>  

//     <div></div>
//   );
// }

import { Link } from "react-router-dom";
import Card from "./componets/card";
import Navbar from "./componets/Navbar";
import "boxicons";
import CardCelulares from "./componets/cardCelulares";

export default function App() {
  return (
    <div className="">
      <div className=" bg-fondo bg-blue-500 p-10 flex flex-col items-center justify-center gap-16 rounded-2xl h-[30rem] max-w-6xl m-auto">
        <h1 className="text-white font-semibold text-center">Compra buenos productos <br/> a buenos precios</h1>
        <button className="bg-gray-200">Comprar</button>
      </div>

      <div className="grid grid-cols-6 gap-4 pt-8 max-w-6xl m-auto">
        <Card nombre="Celulares" imagen="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        <Card nombre="Laptops" imagen="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80" />
        <Card nombre="Tablets" imagen={"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} />
        <Card nombre="Accesorios" imagen={"https://images.unsplash.com/photo-1572721546624-05bf65ad7679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"} />
        <Card nombre="Audifonos" imagen={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} />
        <Card nombre="Cargadores" imagen={"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"} />
      </div>

    <div className="flex items-center justify-center h-96 pt-20 max-w-6xl m-auto">
      <h2 className="text-6xl font-semibold text-center">Accesorios. Busca los <br/> accesorios que necesitas para <br/> tu celular</h2>
    </div>


    <div className="flex flex-row max-w-6xl m-auto">
      <div>
        <img className="rounded-[10px_0px_0px_10px]" src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
      </div>
      <div className="bg-[#242424] flex flex-col items-start justify-center p-8 gap-8 rounded-[0px_10px_10px_0px]">
        <h3 className="text-4xl"><span className="text-white">Tienda.</span><span className=" text-gray-300">Compra tus productos de manera online.</span></h3>
        <button>Ver más</button>
      </div>
    </div>

    <div className="max-w-6xl m-auto">
      <h2 className="text-2xl font-semibold text-start pt-8">Los mejores celulares</h2>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <CardCelulares nombre="Samsung Galaxy S21" precio={17000} imagen={"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}/>
        <CardCelulares nombre="Samsung Galaxy S21" precio={17000} imagen={"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}/>
        <CardCelulares nombre="Samsung Galaxy S21" precio={17000} imagen={"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}/>
        <CardCelulares nombre="Samsung Galaxy S21" precio={17000} imagen={"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}/>

      </div>
    </div>

    <div className="bg-[#eef0f2] w-full p-8  mt-20 flex flex-col items-center justify-center gap-8 h-[30rem]">
      <h2 className="text-5xl text-center">Crea tu cuenta, empieza a buscar el producto que más te guste  y empieza a comprar.</h2>
      <button className="bg-[#242424] text-white">Registrate</button>
    </div>

    <footer>
      <div className="bg-[#242424] flex flex-col items-center justify-center gap-8 p-8 w-full bottom-0">
        
      </div>
    </footer>

    </div>
  );
}

