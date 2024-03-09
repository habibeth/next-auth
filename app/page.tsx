import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-500">
      <div className="space-y-4 text-center">
        <h2 className={cn("text-6xl font-semibold text-white drop-shadow-sm", font.className)}>
          🔐Auth
        </h2>
        <p className={cn("text-white font-medium", font.className)}>A Simple Authentication Service</p>
        <div className="">
          <LoginButton>
            <Button
            variant="secondary"
            size="lg"
            >
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
