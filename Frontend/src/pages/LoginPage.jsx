import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/cleanBot.api";
import { toast } from "react-hot-toast";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const response = await loginUser({
        username: data.username,
        password: data.password,
      });

      // Guardar el token en localStorage o en el estado global
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      toast.success("Inicio de sesión exitoso");

      // Redirigir a la página de películas o dashboard
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      toast.error("Credenciales incorrectas");
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
