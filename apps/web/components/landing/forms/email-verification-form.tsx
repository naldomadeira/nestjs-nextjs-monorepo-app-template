"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
// import { resendEmailVerificationLink } from "@/actions/email"
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// import {
//   emailVerificationSchema,
//   type EmailVerificationFormInput,
// } from "@/validations/email"

// import { useToast } from "@/hooks/use-toast"

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
import { Icons } from "@/components/icons"
import { toast } from "sonner"

export function EmailVerificationForm(): React.JSX.Element {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<any>({
    // resolver: zodResolver(emailVerificationSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(formData: any): void {
    startTransition(async () => {
      try {
        // const message = await resendEmailVerificationLink({
        //   email: formData.email,
        // })

        const message = "success" // Mocking the response for demonstration


        switch (message) {
          // case "not-found":
          //   toast({
          //     title: "User with this email address does not exist",
          //     variant: "destructive",
          //   })
          //   form.reset()
          //   break
          // case "success":
          //   toast({
          //     title: "Success!",
          //     description: "Check your inbox and verify your email address",
          //   })
          //   router.push("/signin")
          //   break
          // default:
          //   toast({
          //     title: "Error sending verification link",
          //     description: "Please try again",
          //     variant: "destructive",
          //   })
          //   router.push("/signup")
          case "success":
            toast("Your message has been sent successfully")
            form.reset()
            break
          default:
            toast("Something went wrong")
        }
      } catch (error) {
        // toast({
        //   title: "Something went wrong",
        //   description: "Please try again",
        //   variant: "destructive",
        // })
        toast("Something went wrong")
        console.error(error)
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4 "
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johnsmith@gmail.com" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <Button disabled={isPending}>
          {isPending ? (
            <>
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
              <span>Pending...</span>
            </>
          ) : (
            <span>Get verification link</span>
          )}
          <span className="sr-only">Resend email verification link</span>
        </Button>
      </form>
    </Form>
  )
}
