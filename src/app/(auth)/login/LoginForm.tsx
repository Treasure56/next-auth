export default function LoginForm() {
  return <form className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-gray-600 font-semibold"> Email Address</label>
    <input placeholder="Email Address" className="rounded-md bg-gray-100 p-2 border border-gray-200 outline-purple-500" type="text" />
    </div>
  </form>;
}
