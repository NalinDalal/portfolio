import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_o7uvaom", "template_qr99caa", form.current, {
          publicKey: "CeI_EByylL4eHjhqi",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Message sent successfully!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );
      //alert("Your message has been sent!");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="border-2 border-white p-6 rounded-md max-w-md mx-auto bg-gray-800 text-white"
    >
      <label className="block mb-2">Name</label>
      <input
        type="text"
        name="user_name"
        className="w-full mb-4 p-2 bg-white text-black rounded-md"
      />
      <label className="block mb-2">Email</label>
      <input
        type="email"
        name="user_email"
        className="w-full mb-4 p-2 bg-white text-black rounded-md"
      />
      <label className="block mb-2">Message</label>
      <textarea
        name="message"
        className="w-full mb-4 p-2 bg-white text-black rounded-md"
      />
      <input
        type="submit"
        value="Send"
        className="bg-gray-700 text-white p-2 rounded-md cursor-pointer hover:bg-gray-600"
      />
    </form>
  );
};

export default ContactForm;
