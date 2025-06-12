import Image from "next/image";

const WelcomeScreen: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-white">
    <Image
      src="/vectal.svg"
      alt="Vectal Logo"
      width={64}
      height={64}
      className="mb-4"
    />
    <h1 className="text-xl font-semibold mb-2">Welcome to Chat</h1>
    <p className="text-center">What can I help you with?</p>
  </div>
);

export default WelcomeScreen;
