import React from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="mb-8 text-sm text-gray-500">
      <div className="flex items-center">
        <CiHome size={18} className="mr-2" />
        {items.map((item, index) => (
          <span key={index} className="flex items-center inline">
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-gray-800 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">&gt;</span>}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
