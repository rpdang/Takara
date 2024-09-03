import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

type ItemFAQ = {
  title: string;
  content: string;
};

const items: ItemFAQ[] = [
  { title: "FAQ1", content: "FAQ1" },
  { title: "FAQ2", content: "FAQ2" },
  { title: "FAQ3", content: "FAQ3" },
  { title: "FAQ4", content: "FAQ4" },
] as const;

const FAQ = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:px-6 lg:pb-24">
      <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:mb-8 lg:text-3xl">
        Frequently asked questions
      </h2>
      <div className="mx-auto max-w-screen-md">
        <Accordion>
          <>
            {items.map((item, i) => {
              return (
                <AccordionPanel key={i}>
                  <AccordionTitle>{item.title}</AccordionTitle>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionPanel>
              );
            })}
          </>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
