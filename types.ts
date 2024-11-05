import z from "zod"

export const consultFormSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(1, { message: "Phone number is required." }),
    message: z.string().min(1, { message: "Message cannot be empty." }),
})
export type consultForm = z.infer<typeof consultFormSchema>


export type menuItem = {
    name: string,
    link: string
    subMenu?: subMenuItem[],
}

export type subMenuItem = {
    name: string,
    link: string,
}