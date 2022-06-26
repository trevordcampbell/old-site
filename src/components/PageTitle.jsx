import Image from "next/image";
import { Container } from "@/components/Container";

export function PageTitle () {
    return (
      <Container className="pt-20 pb-16 px-6 lg:px-0 max-w-7xl mx-auto text-left lg:pt-18">
        <h2 className="text-3xl font-display font-medium leading-tight text-black sm:text-4xl lg:text-5xl">🏛 Museum of Trevy</h2>
        <div className="mt-4 text-base leading-relaxed text-gray-600 space-y-4">
          <p>Throughout my life, I have curated a personal museum of things which carry significance to me. They symbolize the journey I have made, the people I have met, the hardships I have endured, the things that captivate me, and things that provoke deep questions within me:</p>
          <blockquote class="inline-flex italic text-gray-500 font-serif font-medium px-4 py-2 border-l-4 border-gray-300 bg-gray-50 rounded-md">"Who am I?", "What do I stand for?", "Why are we here?", "Am I doing things that matter?"</blockquote>
          <p>I invite you, reader, into my life to explore the Museum of Trevy. I hope what you find will captivate you too...</p>
        </div>
      </Container>
    );
}