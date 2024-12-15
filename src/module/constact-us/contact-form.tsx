'use client'
import { motion } from 'framer-motion'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { generate32BitUUID } from "@/lib/service/generate32BitUUID";
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
import { Textarea } from "@/components/ui/textarea"
import { memo, useEffect, useState } from 'react'
import { useAddContactUsFormMutation } from '@/state/api'

const formSchema = z.object({
    name: z
        .string()
        .min(3, 'Name must be at least 3 characters long')
        .max(15, 'Name must be no more than 15 characters long')
        .regex(/^[A-Za-z]+$/, 'Name can only contain alphabets'),
    email: z
        .string()
        .email('Invalid email address'),
    mobile: z
        .string()
        .length(10, 'Mobile number must be exactly 10 digits')
        .regex(/^[0-9]+$/, 'Mobile number can only contain digits'),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters long')
        .max(500, 'Message must be no more than 500 characters long')
        .regex(/^[A-Za-z0-9\s]+$/, 'Message can only contain alphabets, numbers, and spaces'),
})

const ContactForm = () => {
    const [addContactUsForm, { isLoading, isSuccess }] = useAddContactUsFormMutation();
    const [isSubmitted, setIsSubmitted] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const updatedData = {
            ...values,
            uuid: generate32BitUUID(),
        }
        await addContactUsForm(updatedData);
    }
    useEffect(() => {
        if (isSuccess) {
            form.reset()
            setIsSubmitted(isSuccess)
        }
    }, [isSuccess, form])
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter your full name (3-15 characters, alphabets only).
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="name@gmail.com" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter a valid email address.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mobile</FormLabel>
                                <FormControl>
                                    <Input placeholder="1234567890" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter a 10-digit mobile number.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Type your message here."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter your message (10-500 characters, alphanumeric and spaces only).
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading} >{isLoading ? (
                        <>
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Submitting...
                        </>
                    ) : (
                        'Submit'
                    )}</Button>
                </form>
            </Form>
            {isSubmitted && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                        <p>Your message has been sent successfully. We'll be in touch soon!</p>
                        <Button className="mt-4" onClick={() => setIsSubmitted(false)}>Close</Button>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export default memo(ContactForm)