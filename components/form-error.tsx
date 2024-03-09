import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface formErrorProps{
    label?: string,
}

export const FormError = ({label}:formErrorProps) => {
    if(!label) return null;
    return (
        <div className="w-full flex items-center p-3 bg-destructive/15 text-destructive rounded-md text-sm gap-x-2">
            <ExclamationTriangleIcon className="h-5 w-5" />
            <p>{label}</p>
        </div>
    );
};