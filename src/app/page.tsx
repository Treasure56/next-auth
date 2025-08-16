export default function Page() {
  return (
    <div className=" flex flex-col gap-4 justify-center items-center h-screen bg-gradient-to-br from-cyan-400 via-purple-300 to-pink-200">
      <h1 className="text-bold text-5xl">Next Auth</h1>
      <button className="text-white bg-purple-600 hover:bg-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 animate-none ">
        Login
      </button>
    </div>
  );
}
