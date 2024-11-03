"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6 md:py-12">
      <div className="container mx-auto text-center text-white ">
        © {new Date().getFullYear()} All rights reserved to Black Beast
      </div>
    </footer>
  );
};

export default Footer;
