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
import { useSession } from "@clerk/nextjs"
// import { Separator } from "../ui/separator";

const profileFormSchema = z.object({
  paper: z.any(),

  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
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
    })
    .optional(),
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  socialMedia: z.string().optional(),
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



export function Comprehendability({ values }: { values: any}){
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })
  const session = useSession()
  type Values = Record<string, string>;

  const log = async (event: React.FormEvent) => {
    event.preventDefault(); // This will prevent the default form submission behavior

    const values: Values = { "userid": session.session?.id as string, "name": "Pablo" }


    const instagramElement = document.getElementById('instagramhandle') as HTMLInputElement;
    if (instagramElement) {
      const instagramValue = instagramElement.value;
      // console.log(instagramValue)
      console.log(instagramValue);
      values['instagram'] = instagramValue;
    } else {
      console.log("Element not found");
    }

    const bannedwebsites = document.getElementById('banned0') as HTMLInputElement;
    if (bannedwebsites) {
      const bannedwebsite = bannedwebsites.value;
      console.log(bannedwebsite);
      values['banned'] = bannedwebsite;
    } else {
      console.log("Element not found");
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

  const [bannedwebsites, setBannedwebsites] = useState<string[]>(["google.com"]);

  // const onSubmit = async (data: ProfileFormValues) => {


  //   // Handle the rest of your form submission
  //   // ...
  // };



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

  function submitHandler(data: any) {
    data.preventDefault()
    toast({
      title: "Updated!",
      description: "Your settings have been updated!",
    })
  }


  return (
    <Form {...form}>
      <form onSubmit={log} className="space-y-8">

        <div>
          <h3 className="text-lg font-medium">Intervention Mechanisms</h3>
          <p className="text-sm text-muted-foreground">
            What should we keep an eye on?
          </p>
        </div>
        <Separator className="bg-neutral-700" />
        <FormField
          control={form.control}
          name="instagram"
          render={({ field }) => (
            <FormItem
              className="w-full">
              <FormLabel>Ex's Social Media</FormLabel>
              <FormControl>
                <Input id="instagramhandle" className="border-neutral-700" placeholder="Instagram handle" {...field} />
              </FormControl>
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="socialMedia" // This is the name for the group of fields
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Banned websites</FormLabel>
              <div className="w-full">


                {bannedwebsites.map((value: string, ind: number) => {
                  return <Input id={"banned" + ind} key={ind} defaultValue={value} placeholder="duckduckgo.com" className="mt-4 border-neutral-700" />
                })}
              </div>




              <Button onClick={() => setBannedwebsites(web => [...web, ""])} type="button">
                <svg className="text-neutral-800 rounded-full bg-transparent w-8 h-8" width="512" height="512" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601c-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1" />
                </svg>
              </Button>

              <FormDescription>
                These are the websites you're attempting to avoid, to preseve your sanity!
              </FormDescription>

              <FormMessage />
              <div className="invisible w-full h-0">

                These are the websites you're attempting to avoid, to preseve your sanity! Tentative titles are perfectly fine, as long as they relate to the content.
              </div>
            </FormItem>
          )}
        />



        <Button className="border-neutral-800 hover:border-neutral-700 border" type="submit">Update Settings</Button>
      </form >
    </Form >
  )
}