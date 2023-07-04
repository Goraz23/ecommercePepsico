import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold">Bienvenido</h1>
          <p className="text-xl">Inicia sesión para continuar</p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <input
              id="email"
              className="border-2 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              id="password"
              className="border-2 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Contraseña"
            />
          </div>

          <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors duration-300">
            Iniciar Sesión
          </button>
        </form>

        <p className="mt-4 text-gray-700 font-bold">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-blue-700">
            ¡Únete!
          </Link>
        </p>
      </div>
    </div>
  );
}     