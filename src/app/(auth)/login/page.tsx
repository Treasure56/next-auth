import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function Page() {
  return (
    <main className="flex flex-col justify-center md:h-screen max-w-[500px] mx-auto">
      <div className="bg-white shadow rounded px-8 pt-6 pb-8 mb-4  flex flex-col gap-4">
        <h2 className=" text-3xl font-semibold text-center">Login</h2>
        <p className="text-gray-600 text-base text-center">
          Login with Next Auth
        </p>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
