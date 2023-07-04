import { Link } from "react-router-dom";
import Card from "./components/card";
import Navbar2 from "./components/Navbar2";
import CardProductos from "./components/CardProductos";
import Footer from "./components/footer";
import 'boxicons'


export default function App (){
  return(
    <div className="">
      <Navbar2></Navbar2>
      <br/><br/><br/>
      <Link to={"/NuevosLanzamientos"} className="m-8rem">
      <div className = "bg-fondo bg-blue-400 p-0 flex flex-col items-center justify-center gap-4 rounded-2xl h-[25rem] max-w-100xl m-auto">
      </div></Link>

      <br/><br/><br/>

      <Link to ={"/nuestrasmarcas"}>
      <div className=" bg-fondo1 bg-blue-300 w-full flex flex-row items-center justify-center  gap-4 h-[24.5rem] ">
        <h1 className="text-white font-semibold text-center">
          CONÓCENOS Y SE PARTE DE NUESTRA FAMILIA
        </h1>
      </div>
      </Link>

      <div className="grid grid-cols-6 gap-4 pt-8 max-w-6xl m-auto">
        <Link to="https://www.pepsico.com.mx/inicio">
        <Card
          nombre="Familia Pepsico"
          imagen={
            "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/4e7c4df0f889ea51958cd7fad05e2d1a"
          }
        />
        </Link>
        
        <Link to="https://quaker.lat/mx/">
        <Card 
          nombre="Quaker"
          imagen="https://i.insider.com/4f35815d69bedda60e000010?width=600&format=jpeg&auto=webp"
        />
        </Link>
        
        <Link to="https://gepp.com.mx/consumidor/">
        <Card
          nombre="Grupo Gepp"
          imagen="https://www.pepsico.com.mx/images/librariesprovider20/brands/12.jpg?sfvrsn=6d229494_0"
        />
        </Link>
        
        <Link to="https://sabritas.com.mx/promocion/">
        <Card
          nombre="Sabritas"
          imagen={
            "https://w7.pngwing.com/pngs/807/569/png-transparent-sabritas-hd-logo.png"
          }
        />
        </Link>
        
        <Link to="https://sonrics.com.mx/">
        <Card
          nombre="Sonric's"
          imagen={
            "https://i.pinimg.com/originals/24/3a/1a/243a1aad6c70359c3ef72a1ba621196d.jpg"
          }
        />
        </Link>
        
        <Link to="https://joyapp.mx/inicio">
        <Card
          nombre="Gamesa"
          imagen={
            "https://w7.pngwing.com/pngs/765/417/png-transparent-gamesa-hd-logo.png"
          }
        />
        </Link>     
      </div>
      
      <div className="max-w-6xl m-auto">
        <h1 className="text-2xl font-semibold text-start pt-8">
          Compra los mejores productos para tu negocio
        </h1>
        <div className="grid grid-cols-3 gap-8 mt-4">
          <CardProductos
            nombre="Caja de Pepsi-Cola de 235ml de 8 unidades"
            precio={108}
            imagen={
              "https://images.unsplash.com/photo-1546695259-ad30ff3fd643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
            }
          />
          <CardProductos
            nombre="Gatorade sabor Ponche De Frutas de 1 litro cada uno. 6 Pack"
            precio={145.80}
            imagen={
              "https://m.media-amazon.com/images/I/51YQoO5Q6VL.jpg"
            }
          />
          <CardProductos
            nombre="Sabritas Minis Surtido de Botanas - 50 Piezas"
            precio={399}
            imagen={
              "https://m.media-amazon.com/images/I/61+e+C0dmYL._AC_SX679_.jpg"
            }
          />
          <CardProductos
            nombre="Galleta de Avena Quaker sabor Chocolate, caja con 6 paquetes, 240 g"
            precio={180}
            imagen={
              "https://m.media-amazon.com/images/I/61R43pUI05L._AC_SX679_.jpg"
            }
          />
          <CardProductos
            nombre="SONRICS - Rockaleta Bola, 320 gramos"
            precio={50}
            imagen={
              "https://m.media-amazon.com/images/I/61o97q80cyL.__AC_SX300_SY300_QL70_ML2_.jpg"
            }
          />
          <CardProductos
            nombre="MAMUT MINI MAMUT GAMESA CAJA GRANDE DE 720 GRAMOS CON 60 PIEZAS"
            precio={90}
            imagen={
              "https://m.media-amazon.com/images/I/61fEWtGl-rL._AC_SX679_.jpg"
            }
          />
        </div>

      </div>
      <br/><br/><br/>
            <Footer></Footer>
    </div> 
  );
}
