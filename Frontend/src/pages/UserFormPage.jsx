import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { createUser } from "../api/cleanBot.api";

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
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
      const response = await createUser(data);

      if (response.data.token) {
        // Guardar el token en localStorage o en el estado global
        const token = response.data.token;
        localStorage.setItem("token", token);

        // Mostrar la alerta de inicio de sesion
        toast.success("Registro exitoso");

        // Redirigir a la página de películas o dashboard
        navigate("/");
      }
    } catch (error) {
      toast.error("Ocurrió un error, intenta nuevamente");
    } finally {
      setLoading(false);
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Nombre de usuario</label>
        <input type="text" {...register("username", { required: true })} />
        {errors.username && <span>Este campo es obligatorio</span>}

        <label htmlFor="">Coreo electronico</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Este dcampo en obligatorio</span>}

        <label htmlFor="">Contraseña</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Este campo es obligatorio</span>}

        <label htmlFor="">Confirmar contraseña</label>
        <input
          type="password"
          {...register("password_confirm", {
            required: true,
            validate: (value) =>
              value === getValues("password") || "Las contraseñas no coinciden",
          })}
        />
        {errors.password_confirm && (
          <span>{errors.password_confirm.message}</span>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
}
