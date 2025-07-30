 
import { TextScroll } from "@/components/ui/text-scroll";
 
function TextFlow() {
  return (
    <div className="h-max-fit mt-10">
      
      <TextScroll
      className=" font-display text-center text-4xl font-semibold  
        tracking-tighter text-white md:text-7xl md:leading-[5rem]"
      text="Get Noticed - Get Remembered - Get Results -"
      default_velocity={3}
    />
    </div>
    
  );
}

export default TextFlow;
