// VideoIdeasSlider.tsx
import React, { useState } from 'react';
import CardComponent from './card';
import TextTransition, { presets } from 'react-text-transition';

const videoIdeas = [
    { title: 'More videos', description: 'Consider making more videos and at a faster pace!' },
    { title: 'Idea 2', description: 'Description for Idea 2' },
    // ... add more video ideas
];

const VideoIdeasSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(videoIdeas.length);

    const nextIdea = () => {
        if (currentIndex > 0) {
            // setCurrentIndex((prevIndex) => (prevIndex + 1) % videoIdeas.length);
            setCurrentIndex((prevIndex) => (prevIndex - 1));
            setIdead(true)
        }
    };
    const [idead, setIdead] = useState(false);

    const currentIdea = videoIdeas[currentIndex];

    const unClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1));
    }

    return (
        <div className='w-full'>


            <div className="mt-32 w-full flex justify-center  ">
                <div className="w-full flex justify-center">
                    <button
                        className="bg-indigo-800 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                        onClick={nextIdea}
                    >
                              <TextTransition springConfig={presets.wobbly}> {currentIndex==videoIdeas.length ? "Give me feedback!" : "More feedback"}</TextTransition>

                        {/* {!idead ? "Give me feedback!" : "More feedback"} */}
                    </button>
                </div>

            </div>



            <div
                className="h-[400px] relative mt-12 w-full  transition-transform duration-700"
            // style={{
            //     transform: `translateX(${currentIndex * -100}%)`
            // }}
            >
                {videoIdeas.map((idea, ind) => {
                    const index = videoIdeas.length - ind;
                    const rightOffset = (index - currentIndex) * 10; // Adjust '20' to control the spacing

                    return (

                        <div className={`flex justify-center w-full absolute right-0 top-0 ${index > currentIndex ? 'animate-slideIn' : 'animate-slideOut'}`}
                            style={{ right: `${rightOffset}px` }}
                        >
                            <div className={`max-w-lg flex w-full ml-[${(index + 1) * 1000}px]`}>
                                <CardComponent unclick={unClick} title={idea.title} description={idea.description} />
                            </div>
                        </div>
                        //      <div className={`absolute left-0 top-0 ${index > currentIndex ? 'animate-slideIn' : 'animate-slideOut'}`}>
                        //      <CardComponent title={idea.title} description={idea.description} />
                        //  </div>
                        // <div
                        //     key={index}
                        //     className={`w-full absolute transition duration-700 ease-in-out transform ${index > currentIndex ? 'translate-x-full' : 'translate-x-0'}`}
                        // >
                        //     <CardComponent title={idea.title} description={idea.description} />
                        // </div>
                    )
                }
                )
                }
            </div >
        </div>
    );
};

export default VideoIdeasSlider;


