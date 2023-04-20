import ContactForm from "../components/ContactForm";
import { Navigation } from "../components/Navigation";
import { createClient } from "../../prismicio";

export default function Contact({ menu }) {
  const sendFormHanler = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error submitting form.");
      }

      const responseData = await response.json();
      console.log(responseData.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navigation navigation={menu} />
      <h1>Contact us</h1>
      <ContactForm onSend={sendFormHanler} />
    </>
  );
}

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient();

  const menu = await client.getByUID("navigation", "nav");

  return {
    props: { menu },
    revalidate: 60,
  };
}
