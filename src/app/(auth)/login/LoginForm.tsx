"use client";
import { authenticate } from "@/action/actions";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { HiExclamationCircle } from "react-icons/hi";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [error, action, ispending] = useActionState(
    authenticate,
    undefined,
  );
  return (
    <form action={action} className="flex flex-col gap-4">

       {error&& (
            <>
              <HiExclamationCircle className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{error}</p>
            </>
          )}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-gray-600 font-semibold">
          {" "}
          Email Address
        </label>
        <input
          placeholder="Email Address"
          className="rounded-md bg-gray-100 p-2 border border-gray-200 outline-purple-500"
          type="text"
        />
         <label htmlFor="email" className="text-gray-600 font-semibold">
          {" "}
          Password
        </label>
        <input
          placeholder="Password"
          className="rounded-md bg-gray-100 p-2 border border-gray-200 outline-purple-500"
          type="text"
        />
        <input type="hidden" name="callbackUrl" value={callbackUrl} key="" />
        <button aria-disabled={ispending} className="p-2 bg-purple-600 rounded-md text-white mt-4">Login</button>

      </div>
    </form>
  );
}
