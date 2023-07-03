export default function Navbar (){
    return(
        <div className="bg-white text-black fixed top-0 w-full flex flex-row justify-between px-20 py-4 items-center">
            <div>
                <icono/>
                <h1 className="text 2xl front">PEPSICO</h1>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row">
                <box-icon name='search'></box-icon>
                <input className="bg-white" type="search"></input>
                </div>                
                <box-icon type='solid' name='cart'></box-icon>  
                <box-icon name='user-circle'></box-icon>              
            </div>
        </div>
    )
}