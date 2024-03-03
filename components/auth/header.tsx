
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

interface HeaderProps {
    label: string
}

export const Header = ({ label }: HeaderProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-y-4">
            <h2 className={cn("text-3xl font-semibold", font.className)}>🔐Auth</h2>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    );
};