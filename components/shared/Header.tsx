import React from "react";

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <p className="h2-bold text-dark-600">{title}</p>
        {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Header;
