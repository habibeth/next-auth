import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { SocialIcon } from "@/components/auth/social";
import Link from "next/link";
import { BackButton } from "./back-button";


interface CardWrapperProp{
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    isShowSocial?: boolean,
}

export const CardWrapper = ({children, headerLabel, backButtonLabel, backButtonHref, isShowSocial}: CardWrapperProp) => {
    return (
        <Card>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                isShowSocial && 
                <CardFooter>
                    <SocialIcon />
                </CardFooter>
            }
            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel}></BackButton>
            </CardFooter>
        </Card>
    );
};