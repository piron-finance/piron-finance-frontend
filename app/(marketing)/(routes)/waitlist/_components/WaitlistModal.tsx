"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Undo2 } from "lucide-react";
import { cn, longModalClassName } from "@/lib/utils";

interface WaitlistModalProps {
  setSubscribed: (value: boolean) => void;
  setIsOpen: (value: boolean) => void;
}

const WaitlistModal = ({ setSubscribed, setIsOpen }: WaitlistModalProps) => {
  const AddWaitlist = useMutation(api.waitlist.AddToWaitlist);

  const formSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    potentialCapital: z.string().min(2),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      potentialCapital: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const promise = AddWaitlist({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        capital: data.potentialCapital,
      });

      toast.promise(promise, {
        loading: "Joining waitlist...",
        success: () => {
          setSubscribed(true);
          return `You have successfully joined the waitlist!!.`;
        },
        error: () => {
          setSubscribed(true);
          return `You are already in the waitlist!!.`;
        },
      });

      setIsOpen(false); // close the modal
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div className={cn(longModalClassName())}>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-3">
            <Button
              className=" rounded-full flex items-center gap-3"
              size="lg"
              variant="ghost"
              onClick={() => setIsOpen(false)}
            >
              <Undo2 />
              <p className="mt-1">Go Back</p>
            </Button>
            <h1 className="text-4xl font-semibold text-gray-700 text-center sm:text-left">
              Join the Waitlist
            </h1>
            <p className="text-sm text-muted-foreground">
              We will contact you once we go live.
            </p>
          </div>
        </div>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Example Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Example Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="me@example.com" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="potentialCapital"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Potential Capital
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="$1000" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-[#007A86] self-center"
                size="lg"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
