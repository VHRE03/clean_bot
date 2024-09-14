import { useForm } from "react-hook-form";

export function LoginPage() {
  const { handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {});

  return (
    <div>
      <form onSubmit={onSubmit}></form>
    </div>
  );
}
