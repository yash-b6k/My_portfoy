import Dark_Moon from "../../assets/Moon.png"; // adjust path if needed

export default function MoonIcon({ className = "h-6 w-6" }) {
  return (
    <img
      src={Dark_Moon}
      alt="Moon Icon"
      className={className}
    />
  );
}
