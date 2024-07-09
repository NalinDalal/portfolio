import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  //@ts-ignore
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs //@ts-ignore
      .sendForm("service_o7uvaom", "template_qr99caa", form.current, {
        publicKey: "CeI_EByylL4eHjhqi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          //@ts-ignore
          alert.show("Message sent successfully!");
        },
        (error) => {
          //@ts-ignore
          console.log("FAILED...", error.text);
        },
      );
    alert("Your message has been sent!");
  };

  return (
    //@ts-ignore
    <form
      //@ts-ignore
      ref={form}
      onSubmit={sendEmail}
      style={{
        border: "2px solid white",
        padding: "20px",
        borderRadius: "5px",
        maxWidth: "400px",
        margin: "0 auto",
        backgroundColor: "#333", // Dark grey background
        color: "white", // White text for contrast
      }}
    >
      <label style={{ color: "white" }}>Name</label>
      <input
        type="text"
        name="user_name"
        style={{
          display: "block",
          width: "100%",
          marginBottom: "10px",
          backgroundColor: "#fff", // White background for input
          color: "#000", // Black text for input
        }}
      />
      <br />
      <label style={{ color: "white" }}>Email</label>
      <input
        type="email"
        name="user_email"
        style={{
          display: "block",
          width: "100%",
          marginBottom: "10px",
          backgroundColor: "#fff", // White background for input
          color: "#000", // Black text for input
        }}
      />
      <br />
      <label style={{ color: "white" }}>Message</label>
      <textarea
        name="message"
        style={{
          display: "block",
          width: "100%",
          marginBottom: "10px",
          backgroundColor: "#fff", // White background for textarea
          color: "#000", // Black text for textarea
        }}
      />
      <br />
      <input
        type="submit"
        value="Send"
        style={{
          color: "white",
          backgroundColor: "#555", // Darker grey background for button
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          display: "block",
          marginTop: "10px",
        }}
      />
    </form>
  );
};

export default ContactForm;
