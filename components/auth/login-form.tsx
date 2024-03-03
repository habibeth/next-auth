"use client"

import { Form } from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm= () => {
    return (
        <div>
            <CardWrapper
            headerLabel="WelCome to Back Our Website!"
            backButtonHref="/auth/register"
            backButtonLabel="Don't Have an Account?"
            isShowSocial
            >
                <h2>This is Login Form</h2>
                {/* <Form {...field}>
                    <form>

                    </form>
                </Form> */}
            </CardWrapper>
        </div>
    );
};