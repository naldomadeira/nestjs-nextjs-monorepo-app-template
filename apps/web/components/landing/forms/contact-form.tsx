"use client"

import * as React from "react"
// import { submitContactForm } from "@/actions/email"
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// import { contactFormSchema, type ContactFormInput } from "@/validations/email"

import { toast } from "sonner"

import { Button } from "@repo/shadcn/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/shadcn/form"
import { Input } from "@repo/shadcn/input"
import { Textarea } from "@repo/shadcn/textarea"
import { Icons } from "@/components/icons"

export function ContactForm(): React.JSX.Element {
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<any>({
    // resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(formData: any): void {
    startTransition(async () => {
      try {
        // const message = await submitContactForm(formData)
        const message = 'success' // Mocking the response for demonstration


        switch (message) {
          case "success":
            toast("Your message has been sent successfully")
            form.reset()
            break
          default:
            toast("Something went wrong")
        }
      } catch (error) {
        toast("Something went wrong")
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-8"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="grid w-full gap-8 md:grid-cols-2 md:gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>

                <FormControl className="h-12">
                  <Input type="text" placeholder="John" {...field} />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl className="h-12">
                  <Input type="email" placeholder="john@smith.com" {...field} />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Message</FormLabel>
              <FormControl className="min-h-[180px] md:min-h-[240px]">
                <Textarea
                  {...field}
                  placeholder="Hi, I am looking to..."
                  className="text-base"
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <Button
          variant="outline"
          className="h-14 border bg-gradient-to-br from-pink-600/70 to-purple-400/70 text-lg font-bold tracking-wide hover:opacity-70"
        >
          {isPending && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {isPending ? "Sending..." : "Send"}
          <span className="sr-only">Submit contact form</span>
        </Button>
      </form>
    </Form>
  )
}
