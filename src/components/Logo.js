export default function Logo() {
  return (
    <a
      href="/"
      className="absolute top-1 left-1 z-50"
    >
      <img
        src="/logo.png"
        alt="Surf Hunters"
        className="h-24 w-auto hover:opacity-80 transition"
      />
    </a>
  );
}