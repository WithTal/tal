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

export function Comprehendability() {
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
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
              <FormLabel>Exes' Social Media</FormLabel>
              <FormControl>
                <Input className="border-neutral-700" placeholder="Instagram handle" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
       
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem
              className="w-full">
              <FormLabel>Exes' Social Media</FormLabel>
              <FormControl>
                <Input className="border-neutral-700" placeholder="Instagram handle" {...field} />
              </FormControl>
              <FormControl>
                <Input className="border-neutral-700" placeholder="Facebook handle" {...field} />
              </FormControl>
              <FormControl>
                <Input className="border-neutral-700" placeholder="Snapchat handle" {...field} />
              </FormControl>
              <FormControl>
                <Input className="border-neutral-700" placeholder="LinkedIn handle" {...field} />
              </FormControl>
              <FormDescription>
                Your paper's title, as it would show up in your publication. Tentative titles are perfectly fine, as long as they relate to the content.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="socialMedia" // This is the name for the group of fields
          render={({ field }) => (
            <FormItem className="w-full">
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



        <Button className="border-neutral-800 hover:border-neutral-700 border" type="submit">Update Settings</Button>
      </form >
    </Form >
  )
}