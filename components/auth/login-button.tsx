"use client"

import { useRouter } from "next/navigation";


interface LoginButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean,
}



export const LoginButton = ({
    children,
    mode="redirect",
    asChild
}: LoginButtonProps) => {
    const router = useRouter();

    const handleLoginButton = () => {
        router.push("/auth/login")
    }

    if (mode === "modal") {
        return (
            <div className="">
                TODO: MODAL Implementation next
            </div>
        )
    }


    return (
        <span onClick={handleLoginButton} className="cursor-pointer">
            {children}
        </span>
    );
};