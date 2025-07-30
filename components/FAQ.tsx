'use client'
import ShinyText from '@/components/ui/SubHeading';

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/components/ui/base-accordion';

export default function Component() {
  return (
    <section className="text-white py-16 px-4 md:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-5xl md:text-4xl lg:text-6xl font-bold mb-4 ">
          Frequently Asked <span className="text-[#FFFF00] drop-shadow-[0_0_8px_#FFFF00]">
           Questions 
          </span>
        </h2>
         
        <p  className=" text-gray-400 mx-auto pt-5
         max-w-xl text-center text-base md:text-lg  " >
          <ShinyText
            text="Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team."
            speed={5}          
          />
       </p>   
      </div>

      <div className="flex justify-center items-center">
        <Accordion openMultiple={true} className="w-full lg:w-[75%]">
          <AccordionItem value="reui-1">
            <AccordionHeader  >
              <AccordionTrigger >How does the AI content generation work?</AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel>
              Our AI uses advanced machine learning models trained on millions of high-converting marketing materials. Simply input your brand guidelines, target audience, and campaign goals, and the AI will generate personalized content that matches your brand voice and resonates with your audience.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="reui-2">
            <AccordionHeader >
              <AccordionTrigger>Can I integrate ADmyBRAND with my existing marketing tools?</AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel>
              Yes! ADmyBRAND integrates with 50+ popular marketing platforms including Google Ads, Facebook Ads Manager, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations with your proprietary systems.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="reui-3">
            <AccordionHeader >
              <AccordionTrigger>Can I cancel my subscription anytime?</AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel>
              Absolutely! You can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data before your account expires.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="reui-4">
            <AccordionHeader >
              <AccordionTrigger>How quickly can I see results?</AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel>
              Most customers see initial improvements within the first week of using ADmyBRAND. Significant results like increased conversion rates and reduced costs typically become apparent within 2-4 weeks as the AI learns your brand and optimizes campaigns.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="reui-5">
            <AccordionHeader >
              <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel>
            Yes! We offer a 14-day free trial with no credit card required. You\'ll have full access to all features during the trial period, and our team will help you get set up and see results quickly.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
