

interface AuthLayoutProps{
    children: React.ReactNode,
}

const AuthLayout = ({children}:AuthLayoutProps) => {
    return (
        <div className="flex items-center justify-center py-20 min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-500">
            {children}
        </div>
    );
};

export default AuthLayout;