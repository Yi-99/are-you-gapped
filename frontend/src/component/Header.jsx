const Header = () => {
    return (
      <>
        <header className="bg-white py-4 px-6 flex items-center">
        {/* Logo Image */}
        <img 
          src="/src/assets/lelandLogo.png" 
          alt="Leland Logo" 
          className="h-12 w-auto mr-4" 
        />
        {/* Header Title */}
      </header>
      <div className="border-b border-gray-300"></div>
    </>
    );
  };
  
  export default Header;