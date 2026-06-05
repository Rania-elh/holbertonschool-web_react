function Login() {
  return (
    <div className="App-body p-8 min-h-[50vh] border-t-2 border-(--main-color)">
      <p className="text-[1.1rem] mb-4">Login to access the full dashboard</p>
      <form className="flex flex-wrap items-center gap-2 max-[912px]:flex-col max-[912px]:items-stretch">
        <label htmlFor="email" className="text-base">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="px-2 py-1.5 text-base border border-gray-300 rounded mr-4 max-[912px]:mr-0 max-[912px]:w-full"
        />
        <label htmlFor="password" className="text-base">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          className="px-2 py-1.5 text-base border border-gray-300 rounded mr-4 max-[912px]:mr-0 max-[912px]:w-full"
        />
        <button
          type="button"
          className="px-4 py-1.5 text-base bg-(--main-color) text-white rounded cursor-pointer hover:bg-[#b80031] max-[912px]:w-full"
        >
          OK
        </button>
      </form>
    </div>
  );
}

export default Login;
