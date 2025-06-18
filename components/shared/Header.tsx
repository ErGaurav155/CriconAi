import React from "react";

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <p className="text-lg xl:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
          {title}
        </p>
        {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Header;
