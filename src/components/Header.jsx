import React from "react";
export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
        <h1 className="text-2xl font-bold text-primary">Darsliklar</h1>
        <nav className="space-x-4 text-sm">
          <a className="hover:text-primary" href="#">
            Home
          </a>
          <a className="hover:text-primary" href="#">
            Videos
          </a>
          <a className="hover:text-primary" href="#">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
