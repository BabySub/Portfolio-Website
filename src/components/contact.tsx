// src/components/ContactForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { contactSubmit } from "../api";
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await contactSubmit(data);
      reset();
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-background text-foreground flex justify-center"
    >
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md border border-input 
                         bg-background text-foreground 
                         focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-input 
                         bg-background text-foreground 
                         focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
<div>
  <label className="block text-sm font-medium mb-2">Message</label>
  <textarea
    {...register("message", { required: "Message is required" })}
    placeholder="Write your message"
    className="w-full px-4 py-3 rounded-md border border-input 
               bg-background text-foreground 
               focus:outline-none focus:ring-2 focus:ring-primary 
               transition resize-none h-32"
  />
  {errors.message && (
    <p className="text-sm text-destructive mt-1">
      {errors.message.message}
    </p>
  )}
</div>


          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground 
                       py-3 rounded-md font-semibold shadow-md 
                       hover:shadow-lg transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
