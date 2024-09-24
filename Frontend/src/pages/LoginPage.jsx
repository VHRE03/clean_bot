import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/cleanBot.api";
import { toast } from "react-hot-toast";
import robotVacuum from "../assets/login-image.jpg";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si ya existe un token en el localstorage
    const token = localStorage.getItem("token");

    // Si ya existe un token, redirigir a la pagina de inicio
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    try {
      const response = await loginUser({
        username: data.username,
        password: data.password,
      });

      if (response.data.token) {
        // Guardar el token en localStorage o en el estado global
        const token = response.data.token;
        localStorage.setItem("token", token);

        // Mostrar la alerta de inicio de sesion
        toast.success("Inicio de sesión exitoso");

        // Redirigir a la página de películas o dashboard
        navigate("/");
      }
    } catch (error) {
      // Si el error tiene un status de 401, lo mostramos
      if (error.response && error.response.status == 401) {
        toast.error("Credenciales incorrectas");
      } else {
        // Para otros tipos de errores
        toast.error("Ocurrió un error, intenta nuevamente");
      }

      // Limpiar los campos de entrada en caso de error
      reset();
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="flex h-screen">
      {/* Sección de la imagen y formulario */}
      <div className="flex w-full">
        {/* Sección de la imagen */}
        <div className="hidden lg:flex lg:w-2/3">
          <img
            src={robotVacuum}
            alt="Robot Vacuum"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sección del formulario */}
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-gray-800 p-10">
          <div className="w-full max-w-md">
            <h1 className="text-white text-6xl font-bold mb-8 text-center">
              CleanBot
            </h1>
            <form onSubmit={onSubmit}>
              <div className="mb-6">
                <label className="block text-white mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                  type="text"
                  {...register("username", { required: true })}
                  placeholder="Ingrese su usuario"
                />
                {errors.username && (
                  <span className="text-red-500">
                    Este campo es obligatorio
                  </span>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-white mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Ingrese su contraseña"
                />
                {errors.password && (
                  <span className="text-red-500">
                    Este campo es obligatorio
                  </span>
                )}
              </div>

              <button
                className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                type="submit"
                disabled={loading}
              >
                {loading ? "Cargando..." : "Iniciar sesión"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
