import Light_Sun from "../../assets/Sun.png"; // adjust path if needed

export default function MoonIcon({ className = "h-6 w-6" }) {
  return (
    <img
      src={Light_Sun}
      alt="Moon Icon"
      className={className}
    />
  );
}
