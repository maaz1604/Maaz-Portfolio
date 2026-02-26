'use server'

import { sendMail } from "@/lib/mail";

export async function submitContactForm(prevState, formData) {
    void prevState;
    
    const result = await sendMail(formData);
    return result;
}