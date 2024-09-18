import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { createUser } from "../api/cleanBot.api";

export function AdminForm(params) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      // Convertir valores de checkbox a booleano y enviar datos al backend
      const response = await createUser({
        ...data,
        is_staff: data.is_staff === true, // Convertir valor a booleano
        is_superuser: data.is_superuser === true, // Convertir valor a booleano
      });

      // Mostrar la alerta de inicio de sesion
      toast.success("Registro exitoso");

      // Redirigir a la página de películas o dashboard
      navigate("/admin_home");
    } catch (error) {
      toast.error("Ocurrió un error, intenta nuevamente");
    } finally {
      setLoading(false);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">Nombre</label>
      <input type="text" {...register("name", { required: true })} />
      {errors.name && <span>Este campo es obligatorio</span>}

      <label htmlFor="">Nombre de usuario</label>
      <input type="text" {...register("username", { required: true })} />
      {errors.username && <span>Este campo es obligatorio</span>}

      <label htmlFor="">Coreo electronico</label>
      <input type="email" {...register("email", { required: true })} />
      {errors.email && <span>Este dcampo en obligatorio</span>}

      <label htmlFor="">Número de contacto</label>
      <input type="tel" {...register("phone_number", { required: true })} />
      {errors.phone_number && <span>Este dcampo en obligatorio</span>}

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

      <label>
        <input
          type="checkbox"
          {...register("is_staff", {
            validate: {
              bothNotYesOrNo: () => {
                const isStaff = getValues("is_staff");
                const isSuperuser = getValues("is_superuser");
                return (
                  isStaff !== isSuperuser ||
                  "No puede ser ambos staff y administrador, ni tampoco ninguno."
                );
              },
            },
          })}
        />
        ¿Es Staff?
      </label>
      {errors.is_staff && <span>{errors.is_staff.message}</span>}

      <label>
        <input
          type="checkbox"
          {...register("is_superuser", {
            validate: {
              bothNotYesOrNo: () => {
                const isStaff = getValues("is_staff");
                const isSuperuser = getValues("is_superuser");
                return (
                  isStaff !== isSuperuser ||
                  "No puede ser ambos staff y administrador, ni tampoco ninguno."
                );
              },
            },
          })}
        />
        ¿Es Administrador?
      </label>
      {errors.is_superuser && <span>{errors.is_superuser.message}</span>}

      <button type="submit" disabled={loading}>
        {loading ? "Cargando..." : "Registrar"}
      </button>
    </form>
  );
}
