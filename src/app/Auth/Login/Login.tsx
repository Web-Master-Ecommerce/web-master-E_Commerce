
export default function Login() {
  return (
      <div className="max-w-[400px] mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg mb-12">
      <form className="max-w-[400px] flex flex-col w-full p-8 space-y-4">
      <h2 className="text-2xl mb-4 font-semibold flex justify-center">Login</h2>
      <label htmlFor="Email" className="mb-1">Email</label>
      <input
        type="text"
        id="Email"
        placeholder="Enter your email"
        className="p-2 border border-gray-300 rounded-md focus:border-[#35AFA0] outline-none"
      />
      <label htmlFor="password" className="mb-1">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        className="p-2 border border-gray-300 rounded-md focus:border-[#35AFA0] outline-none"
      />
      <button type="submit" className="text-white bg-[#35AFA0] hover:bg-[#2c8c83] p-2 rounded-md">Log In</button>
    </form>
    </div>
  )
}
