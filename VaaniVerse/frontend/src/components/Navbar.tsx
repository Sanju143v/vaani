import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">VaaniVerse AI</a>
        </Link>
        <div className="space-x-4">
          <Link href="/login">
            <a className="hover:underline">Login</a>
          </Link>
          <Link href="/register">
            <a className="hover:underline">Register</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;