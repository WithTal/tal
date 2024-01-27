// CardComponent.tsx
import React, { useState } from 'react';

import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Icons } from "@/components/icons"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, PlusIcon, StarIcon } from '@radix-ui/react-icons';



interface CardComponentProps {
    title: string;
    description: string;
    unclick: () => void
}


const CardComponent: React.FC<CardComponentProps> = ({ title, description, unclick }) => {

    const [visible, setVisible] = useState(false);
    return (
        <div
            // onClick={() => unclick()} 
            className={`relative transform duration-500 cursor-pointer w-full border-neutral-800 shadow-sm shadow-neutral-700 bg-neutral-950 rounded-xl px-8 overflow-hidden shadow-lg p-4 m-4 transition-all ease-in-out ${visible ? 'max-h-[1400px]' : 'max-h-[1200px]'}`}>

            {/* className={` ${visible && "hover:scale-[1.01]"}  relative transform duration-300 cursor-pointer w-full  border-neutral-950  shadow-sm  shadow-neutral-700 bg-neutral-900 rounded-xl  px-8 overflow-hidden shadow-lg p-4 m-4`}> */}
            <button className='absolute top-4 left-4 '>
                <svg onClick={() => unclick()} className='text-neutral-200 h-4 w-4' width="512" height="512" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M15.1 3.1L12.9.9L8 5.9L3.1.9L.9 3.1l5 4.9l-5 4.9l2.2 2.2l4.9-5l4.9 5l2.2-2.2l-5-4.9z" />
                </svg>
            </button>

            <h2 className="font-bold text-center text-5xl text-neutral-200 mb-4">{title}</h2>
            <p className="w-full text-center text-neutral-300 text-base">{description}</p>

            {
                !visible ?
                    <div className='w-full flex justify-center'>
                        <Button onClick={() => setVisible(true)} className='mx-auto hover:bg-neutral-800 bg-neutral-900 mt-4'> Details </Button>
                    </div> :
                    <>
                        <Separator className="bg-neutral-300/40 my-4" />


                        <div className="text-neutral-200 space-y-4">
                            <h4 className="text-sm font-medium text-start ">Top examples</h4>
                            {/* <div className="grid gap-6">
                                <div className="flex items-center justify-between space-x-4">
                                    <div className=" flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarFallback></AvatarFallback>
                                        </Avatar>
                                        <div className='text-start '>
                                            <p className="text-sm font-medium leading-none">
                                                Olivia Martin
                                            </p>
                                            <p className="text-sm text-muted-foreground">m@example.com</p>
                                        </div>
                                    </div>
                                    <Select defaultValue="edit">
                                        <SelectTrigger className="ml-auto w-[110px]" aria-label="Edit">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="edit">Can edit</SelectItem>
                                            <SelectItem value="view">Can view</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center justify-between space-x-4">
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarImage src="/avatars/05.png" alt="Image" />
                                            <AvatarFallback>IN</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium leading-none">
                                                Isabella Nguyen
                                            </p>
                                            <p className="text-sm text-muted-foreground">b@example.com</p>
                                        </div>
                                    </div>
                                    <Select defaultValue="view">
                                        <SelectTrigger className="ml-auto w-[110px]" aria-label="Edit">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="edit">Can edit</SelectItem>
                                            <SelectItem value="view">Can view</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center justify-between space-x-4">
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarImage src="/avatars/01.png" alt="Image" />
                                            <AvatarFallback>SD</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium leading-none">
                                                Sofia Davis
                                            </p>
                                            <p className="text-sm text-muted-foreground">p@example.com</p>
                                        </div>
                                    </div>
                                    <Select defaultValue="view">
                                        <SelectTrigger className="ml-auto w-[110px]" aria-label="Edit">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="edit">Can edit</SelectItem>
                                            <SelectItem value="view">Can view</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div> */}

                            <CardHeader
                                // className="grid grid-cols-[1fr_1fr] items-start space-y-0"
                                className="pt-4 px-0  gap-y-4 grid grid-cols-3  gap-x-6  items-start space-y-0"
                            >

                                <div className="col-span-2 w-full  space-y-1">
                                    <CardTitle>Olivia UI</CardTitle>
                                    <CardDescription className='text-[#A1A1AA]'>
                                        "I think that this could be better but I don't want to say why".
                                    </CardDescription>
                                </div>
                                <div className="flex items-center space-x-1 rounded-md bg-neutral-800 text-secondary-foreground">
                                    <Button variant="secondary" className="bg-neutral-800 text-neutral-200 shadow-none">
                                        <StarIcon fill='#facc15' className="text-yellow-400 mr-2 h-4 w-4" />
                                        45
                                    </Button>
                                    <Separator orientation="vertical" className="bg-neutral-700 h-[20px] md:block hidden" />
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className='md:block hidden hover:bg-neutral-700 bg-neutral-800' asChild>
                                            <Button variant="secondary" className="px-2 shadow-none">
                                                <ChevronDownIcon className="h-4 w-4 text-neutral-200" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            alignOffset={-5}
                                            className="w-[150px] border-neutral-900 shadow-sm shadow-neutral-800 text-neutral-200 bg-neutral-950"
                                            forceMount
                                        >
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuSeparator className="bg-neutral-700" />
                                            <DropdownMenuItem className='cursor-pointer  hover:bg-black'>
                                                Report
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className='cursor-pointer hover:bg-neutral-900'>
                                                Save
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>



                                <div className="col-span-2 w-full  space-y-1">
                                    <CardTitle>Olivia UI</CardTitle>
                                    <CardDescription className='text-[#A1A1AA]'>
                                        "I think that this could be better but I don't want to say why".
                                    </CardDescription>
                                </div>
                                <div className="flex items-center space-x-1 rounded-md bg-neutral-800 text-secondary-foreground">
                                    <Button className="bg-neutral-800 text-neutral-200 shadow-none">
                                        <StarIcon fill='#facc15' className="text-yellow-400 mr-2 h-4 w-4" />
                                        45
                                    </Button>
                                    <Separator orientation="vertical" className="md:block hidden bg-neutral-700 h-[20px]" />


                                    <DropdownMenu >
                                        <DropdownMenuTrigger className=' md:block hidden hover:bg-neutral-700 bg-neutral-800' asChild>
                                            <Button variant="secondary" className="px-2 shadow-none">
                                                <ChevronDownIcon className="h-4 w-4 text-neutral-200" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            alignOffset={-5}
                                            className="w-[150px] border-neutral-900 shadow-sm shadow-neutral-800 text-neutral-200 bg-neutral-950"
                                            forceMount
                                        >
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuSeparator className="bg-neutral-700" />
                                            <DropdownMenuItem className='cursor-pointer  hover:bg-black'>
                                                Report
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className='cursor-pointer hover:bg-neutral-900'>
                                                Save
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </CardHeader>

                        </div>

                    </>}

        </div>
    );
};

export default CardComponent;
