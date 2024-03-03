import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export const SocialIcon = () => {
    return (
        <div className="w-full flex flex-row justify-center items-center gap-x-4">
            <Button
            variant="outline"
            className="w-full text-3xl p-3"
            size="lg"
            onClick={()=>{}}
            >
                <FcGoogle />
            </Button>
            <Button
            variant="outline"
            className="w-full text-3xl p-3"
            size="lg"
            onClick={()=>{}}
            >
                <FaGithub />
            </Button>
        </div>
    );
};