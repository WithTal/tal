"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import * as z from "zod"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { FormEvent, useEffect, useState } from "react"
import { Title } from "@radix-ui/react-toast";
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Toast } from "@/components/ui/toast"
import { useSession } from "@clerk/nextjs"
// import { Separator } from "../ui/separator";

const profileFormSchema = z.object({
    paper: z.any(),
    name1: z
        .string()
        .min(2, {
            message: "Phone number must be at least 2 characters.",
        })
        .max(30, {
            message: "Phone number must not be longer than 30 characters.",
        }),
    name2: z
        .string()
        .min(2, {
            message: "Phone number must be at least 2 characters.",
        })
        .max(30, {
            message: "Phone number must not be longer than 30 characters.",
        }),
    name3: z
        .string()
        .min(2, {
            message: "Phone number must be at least 2 characters.",
        })
        .max(30, {
            message: "Phone number must not be longer than 30 characters.",
        }),
    phone1: z
        .string()
        .min(2, {
            message: "Phone number must be at least 2 characters.",
        })
        .max(30, {
            message: "Phone number must not be longer than 30 characters.",
        }),
    phone2: z
        .string()
        .min(2, {
            message: "Phone number must be at least 2 characters.",
        })
        .max(30, {
            message: "Phone number must not be longer than 30 characters.",
        }),
    phone3: z
        .string()
        .min(2, {
            message: "Phone number must be at least 2 characters.",
        })
        .max(30, {
            message: "Phone number must not be longer than 30 characters.",
        }),
    instagram: z
        .string()
        .startsWith("@", {
            message: "Must beigin with @"
        })
        .min(2, {
            message: "Title must be at least 2 characters.",
        })
        .max(30, {
            message: "Title must not be longer than 30 characters.",
        }),
    username: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(30, {
            message: "Username must not be longer than 30 characters.",
        }),
    socialMedia: z.object({
        instagram: z.string().optional(),
        facebook: z.string().optional(),
        snapchat: z.string().optional(),
        linkedin: z.string().optional(),
    }),
    category: z
        .string({
            required_error: "Please select a category for your paper.",
        }),
    notes: z.string().max(160).min(4),
    urls: z
        .array(
            z.object({
                value: z.string().url({ message: "Please enter a valid URL." }),
            })
        )
        .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>


const defaultValues: Partial<ProfileFormValues> = {
    notes: "",
}

export function Notifications({ values }: { values: any }) {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    })


  

    type Values = Record<string, string>;


    const session = useSession();

    const log = async (event: React.FormEvent) => {
        event.preventDefault(); // This will prevent the default form submission behavior

        const values: Values = { "userid": session.session?.id as string, "name": "Pablo" }



        const name1 = document.getElementById('name1') as HTMLInputElement;
        if (name1) {
            const nameValue1 = name1.value;
            console.log(nameValue1);
            values['name1'] = nameValue1;
        } else {
            console.log("name1 not found");
        }

        const name2 = document.getElementById('name2') as HTMLInputElement;
        if (name2) {
            const nameValue2 = name2.value;
            console.log(nameValue2);
            values['name2'] = nameValue2;
        } else {
            console.log("name2 not found");
        }

        const name3 = document.getElementById('name3') as HTMLInputElement;
        if (name3) {
            const nameValue3 = name3.value;
            console.log(nameValue3);
            values['name3'] = nameValue3;
        } else {
            console.log("name3 not found");
        }

        const contact1 = document.getElementById('contact1') as HTMLInputElement;
        if (contact1) {
            const contactValue1 = contact1.value;
            console.log(contactValue1);
            values['contact1'] = contactValue1;
        } else {
            console.log("contact1 not found");
        }

        const contact2 = document.getElementById('contact2') as HTMLInputElement;
        if (contact2) {
            const contactValue2 = contact2.value;
            console.log(contactValue2);
            values['contact2'] = contactValue2;
        } else {
            console.log("contact2 not found");
        }

        const contact3 = document.getElementById('contact3') as HTMLInputElement;
        if (contact3) {
            const contactValue3 = contact3.value;
            console.log(contactValue3);
            values['contact3'] = contactValue3;
        } else {
            console.log("contact3 not found");
        }





        console.log(values)

        // setLoading(true)
        const d = await fetch("/api/details", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then((response) => response.json())
        console.log(d)
        toast({
            title: "Updated!",
            description: "Your settings have been updated!",
        })

    }



    return (
        <Form {...form}>
            <form onSubmit={log} className="w-full space-y-8">
                <div>
                    <h3 className="text-lg font-medium">Notification System</h3>
                    <p className="text-sm text-muted-foreground">
                        Who should we let know if your mood begins to decline?
                    </p>
                </div>
                <Separator className="bg-neutral-700" />
                <FormField
                    control={form.control}
                    name="phone1"
                    render={({ field: phoneField }) => (
                        <FormItem className="w-full">
                            <FormLabel>Emergency Contact Phone</FormLabel>
                            <FormControl>
                                <Input id="contact1" className="border-neutral-700" placeholder="+1 415 238 ...." {...phoneField} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name1"
                    render={({ field: nameField }) => (
                        <FormItem className="w-full">
                            <FormLabel>Emergency Contact Name</FormLabel>
                            <FormControl>
                                <Input id="name1" className="border-neutral-700" placeholder="Name..." {...nameField} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone2"
                    render={({ field }) => (
                        <FormItem
                            className="w-full">
                            <FormLabel>Close Friend</FormLabel>
                            <FormControl>
                                <Input id="contact2" className="border-neutral-700" placeholder="+1 415 238 ...." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="name2"
                    render={({ field: nameField }) => (
                        <FormItem className="w-full">
                            <FormLabel>Emergency Contact Name</FormLabel>
                            <FormControl>
                                <Input id="name2" className="border-neutral-700" placeholder="Name..." {...nameField} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone3"
                    render={({ field }) => (
                        <FormItem
                            className="w-full">
                            <FormLabel>Cheerful Friend</FormLabel>
                            <FormControl>
                                <Input id="contact3" className="border-neutral-700" placeholder="+1 415 238 ...." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="name3"
                    render={({ field: nameField }) => (
                        <FormItem className="w-full">
                            <FormLabel>Emergency Contact Name</FormLabel>
                            <FormControl>
                                <Input id="name3" className="border-neutral-700" placeholder="Name..." {...nameField} />
                            </FormControl>
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="socialMedia" // This is the name for the group of fields
                    render={({ field }) => (
                        <FormItem className="invisible h-0 w-full">
                            <FormLabel>Exes' Social Media</FormLabel>

                            {/* Instagram Handle */}
                            <FormControl>
                                <Input
                                    className="border-neutral-700"
                                    placeholder="Instagram handle"
                                    name="instagram" // Unique name for Instagram handle
                                    value={field.value?.instagram || ''} // Accessing Instagram value
                                    onChange={field.onChange} // Using the same onChange
                                />
                            </FormControl>

                            {/* Facebook Handle */}
                            <FormControl>
                                <Input
                                    className="border-neutral-700"
                                    placeholder="Facebook handle"
                                    name="facebook" // Unique name for Facebook handle
                                    value={field.value?.facebook || ''} // Accessing Facebook value
                                    onChange={field.onChange} // Using the same onChange
                                />
                            </FormControl>

                            {/* ... Repeat for other social media fields ... */}

                            <FormDescription>
                                Your paper's title, as it would show up in your publication. Tentative titles are perfectly fine, as long as they relate to the content.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />



                <Button onClick={() =>
                    toast({
                        title: "Updated!",
                        description: "Your settings have been updated!",
                    })
                } className="border-neutral-800 hover:border-neutral-700 border" type="submit">Update Settings</Button>
            </form >
        </Form >
    )
}