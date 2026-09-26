export default function Divider() {
  return (
    <div
      aria-hidden="true"
      className="relative left-1/2 w-screen -translate-x-1/2 border-y border-border"
    >
      <div className="hatch mx-auto h-6 max-w-3xl border-border sm:h-8 sm:border-x" />
    </div>
  );
}
