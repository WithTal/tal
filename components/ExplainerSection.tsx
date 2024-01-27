import blur from "/public/blur.png";
import example from "/public/example.png";

import cards from "/public/cards.png";
import input from "/public/input.png"
import input2 from "/public/input2.png"
import world from "/public/world.png"
import cards2 from "/public/cards-2.png";
import result from "/public/result.png";

export default function ExplainerSection() {

  const Step = ({ index, image, section, description }: { index: number, image: string, section: string, description: string }) => {
    return (<div className="space-y-4">
      <div className="flex items-center justify-center space-x-4">
        <div className="text-3xl font-bold text-violet-900 bg-neutral-50 border-2 border-neutral-200 rounded-full w-10 h-10 flex items-center justify-center">
          {index}
        </div>
        <h3 className="text-2xl font-semibold">{section}</h3>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
        {description}
      </p>
      <img
        src={image}
        alt="AI Headshot example"
        className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
      />
    </div>
    )

  }
  return (
    <div className="w-full max-w-6xl  p-8 dark:bg-neutral-900 bg-neutral-100 rounded-lg space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">How This Works</h2>


      <Step image={input2.src} index={1} section="Paste your link" description="Paste any valid link to your website. All refs are transferred from url, so just paste the link and we'll do the rest!" />

      <Step image={cards2.src} index={2} section="Configure your link card" description="Use our simple editor to configure your Twitter card presentation!" />

      <Step image={world.src} index={3} section="Use your link!" description="Get the link and use it, silly!" />

    </div>
  );
}
