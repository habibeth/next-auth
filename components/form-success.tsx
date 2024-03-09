import { CheckCircledIcon } from "@radix-ui/react-icons";

interface formSuccessProps{
    label?: string,
}

export const FormSuccess = ({label}:formSuccessProps) => {
    if(!label) return null;
    return (
        <div className="w-full flex items-center p-3 bg-emerald-500/15 text-emerald-500 rounded-md text-sm gap-x-2">
            <CheckCircledIcon className="h-5 w-5" />
            <p>{label}</p>
        </div>
    );
};