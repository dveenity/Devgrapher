import { useState } from "react";

//react hook form
import { useForm } from "react-hook-form";

//emailJs
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState("Send");

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //send mail with emailJS
  const sendMessage = async (data) => {
    await setSubmitStatus("Sending...");

    try {
      await emailjs.send(
        "service_nhphbmu",
        "template_aw6w6rl",
        data,
        "kKkhnk5jKAvPyqtBD"
      );

      setSubmitStatus("Sent");
      reset();
    } catch (err) {
      setSubmitStatus("Failed");
    } finally {
      // Reset submit button after 2 seconds
      setTimeout(() => {
        setSubmitStatus("Send");
      }, 2000);
    }
  };

  return (
    <div className="contactForm">
      <div>
        <h3>GET IN TOUCH</h3>
        <h4>SEND A MAIL</h4>
      </div>
      <form onSubmit={handleSubmit(sendMessage)} noValidate>
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="What's your Name?"
            required
            {...register("user_name", { required: "Name is required" })}
          />
          {errors.user_name?.message}
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="What's your Email?"
            required
            {...register("user_email", { required: "Email is required" })}
          />
          {errors.user_email?.message}
        </div>
        <div>
          <label htmlFor="message">Send me a Message</label>
          <textarea
            id="message"
            type="text"
            placeholder="What do you want to say?"
            required
            {...register("message", { required: "Message is required" })}
          />
          {errors.message?.message}
        </div>
        <div>
          <input type="submit" value={submitStatus} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
