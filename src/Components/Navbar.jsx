export default function Navbar() {
  return (
    <nav className="bg-gray-500 text-white py-4 mb-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Your Website</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="/blog" className="hover:underline">Blog</a>
          </li>
          <li>
            <a href="/shop" className="hover:underline">Shop</a>
          </li>
          <li>
            <a href="/login" className="hover:underline">Login</a>
          </li>
          <li>
            <a href="/register" className="hover:underline">Register </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
