import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/cleanBot.api";
import { toast } from "react-hot-toast";

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
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Ingrese su usuario"
        />
        {errors.username && <span>Este campo es obligatorio</span>}

        <label htmlFor="">Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Este campo es obligatorio</span>}

        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
}
