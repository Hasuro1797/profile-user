import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Interests from "@/components/Interests";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 container px-4 sm:px-0 items-center mx-auto">
      <About />
      <Interests />
      <ContactForm />
    </main>
  );
}
