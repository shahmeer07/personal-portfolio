const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        color: "white",
        alignItems: "center",
        zIndex: 9999, // Ensure the footer is above other content
      }}
    >
      <div style={{ marginLeft: "10px" }}>Bringing creativity to life </div>
      <div>
        <span>&copy; {currentYear} Shahmeer</span>
      </div>
    </div>
  );
};

export default Footer;
