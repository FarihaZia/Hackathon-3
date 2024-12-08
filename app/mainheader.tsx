import Image from 'next/image';

const MainHeader = () => {
  return (
    <div className="relative bg-[url('/Images/mainbg.svg')] bg-cover bg-center h-[316px] max-w-7xl mx-auto">
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content inside the background */}
      <div className="relative flex flex-col items-center justify-center h-full">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/Images/Logo.svg" // Replace with your logo path
            alt="Shop Logo"
            width={77} // Adjust width as needed
            height={77} // Adjust height as needed
            className="object-contain"
          />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="text-white text-sm">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-2">{'>'}</span>
          <span className="font-bold">Shop</span>
        </nav>
      </div>
    </div>
  );
};

export default MainHeader;
