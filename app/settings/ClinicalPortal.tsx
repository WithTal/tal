"use client"
// import * as pdfjsLib from 'pdfjs-dist';
// import * as pdfjsLib from "pdfjs-dist";


import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
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
import { FormEvent, useState } from "react"
import { Title } from "@radix-ui/react-toast";
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Toast } from "@/components/ui/toast"
import { Checkbox } from "@/components/ui/checkbox"
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
        })
        .optional(),
    email: z
        .string()
        .min(2, {
            message: "Email must be at least 2 characters.",
        })
        .max(30, {
            message: "Email must not be longer than 30 characters.",
        })
        .optional(),

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

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
    notes: "",
}

export default function ClincalPortal() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    })


    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
        }
    };


    const { fields, append } = useFieldArray({
        name: "urls",
        control: form.control,
    })


    // const onSubmit = async (data: ProfileFormValues) => {


    //   // Handle the rest of your form submission
    //   // ...
    // };

    type Values = Record<string, string>;

    const session = useSession();



    function onSubmit(data: ProfileFormValues) {
        console.log("DATA")
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = async (e: ProgressEvent<FileReader>) => {
                if (e.target && e.target.result instanceof ArrayBuffer) {

                    const typedArray = new Uint8Array(e.target.result);
                    console.log(typedArray);
                    // const loadinT
                    // const loadingTask = pdfjsLib.getDocument({ data: typedArray });

                    // const loadingTask = pdfjsLib.getDocument({ data: typedArray });

                    // const pdf = await loadingTask.promise;
                    // // Now you can read the PDF using pdf.js API

                    // // Example: Getting text from the first page
                    // const page = await pdf.getPage(1);
                    // const textContent = await page.getTextContent();
                    // const textItems = textContent.items.map((item: any) => item.str).join(' ');
                    // console.log(textItems); // Do something with the extracted text
                };
            }
            reader.readAsArrayBuffer(selectedFile);
        }
    }

    const log = async (event: React.FormEvent) => {
        event.preventDefault(); // This will prevent the default form submission behavior
    
        const values: Values = { "userid": session.session?.id as string, "name": "Pablo" }


        const name1 = document.getElementById('clinicale') as HTMLInputElement;
        if (name1) {
            const nameValue1 = name1.value;
            console.log(nameValue1);
            values['clinical email'] = nameValue1;
        } else {
            console.log("name1 not found");
        }

        const name2 = document.getElementById('clinicalp') as HTMLInputElement;
        if (name2) {
            const nameValue2 = name2.value;
            console.log(nameValue2);
            values['clinical phone #'] = nameValue2;
        } else {
            console.log("name2 not found");
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


    }


    return (
        <Form {...form}>
            <form onSubmit={log} className="w-full space-y-8">
                <div>
                    <h3 className="text-lg font-medium">Clinical Connection?</h3>
                    <p className="text-sm text-muted-foreground">
                        Optional opt-in to send data to your medical professional
                    </p>
                </div>
                <Separator className="bg-neutral-700" />
                <div className="flex items-center space-x-2">
                    <Checkbox className="text-neutral-200 border-neutral-200" id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Consent to sending this data to your medical professional?
                    </label>
                </div>
                {/* <Checkbox /> */}
                <FormField
                    control={form.control}
                    name="phone1"
                    render={({ field: phoneField }) => (
                        <FormItem className="w-full">
                            <FormLabel>Medical Professional's Contact Phone</FormLabel>
                            <FormControl>
                                <Input id="clinicalp" className="border-neutral-700" placeholder="+1 415 238 ...." {...phoneField} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field: phoneField }) => (
                        <FormItem className="w-full">
                            <FormLabel>Medical Professional's Email</FormLabel>
                            <FormControl>
                                <Input id="clinicale" type="email" className="border-neutral-700" placeholder="drwiggins@doctorland.com" {...phoneField} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <div className="w-full h-0 invisible">

                    Who should we let know if your mood begins to decline?
                    Who should we let know if your mood begins to decline?
                    Who should we let know if your mood begins to decline?
                    Who should we let know if your mood begins to decline?
                    Who should we let know if your mood begins to decline?
                    Who should we let know if your mood begins to decline?
                </div>




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