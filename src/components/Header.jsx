export function Header() {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <h1 className="text-2xl font-bold">Mi Tienda CECYTEM</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:underline">Inicio</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Productos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
