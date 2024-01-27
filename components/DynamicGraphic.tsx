import React, { useEffect, useCallback, useRef } from 'react';

interface DynamicGraphicProps {
    text: string;
    text2: string;

    imageUrl: string;
    imageWidth?: number;
    imageHeight?: number;
    alignRight?: boolean;

}
function wrapText(context: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let line = '';

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
            lines.push(line.trim());
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }

    lines.push(line.trim());
    return lines;
}


const DynamicGraphic: React.FC<DynamicGraphicProps> = ({ text, text2, imageUrl, imageHeight, imageWidth, alignRight }) => {


    // Your existing setSvgRef function remains unchanged
    // const setSvgRef = useCallback((node: HTMLObjectElement) => {
    //     svgRef.current = node;
    //     // ... (rest of your code)
    // }, [text, imageUrl]);
    const svgRef = useRef<HTMLObjectElement | null>(null);




    const setSvgRef = useCallback((node: HTMLObjectElement) => {
        console.log("CALLBACK")
        svgRef.current = node;

        if (node !== null) {
            node.addEventListener('load', () => {
                const svgDoc = node.contentDocument;
                if (svgDoc) {
                    const existingImage = svgDoc.querySelector('image');
                    if (existingImage) {
                        existingImage.remove();
                    }



                    const textElement2 = svgDoc.getElementById('text-placeholder2') as unknown as SVGTextElement;
                    const textElement = svgDoc.getElementById('text-placeholder') as unknown as SVGTextElement;
                    const imageElement = svgDoc.getElementById('image-placeholder') as unknown as SVGImageElement;
                    // console.log(imageElement)

                    // console.log("imageElement")
                    // ... rest of your code for text handling

                    // Create clip path
                    const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
                    clipPath.id = 'clip-left-half';
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', '0');
                    rect.setAttribute('y', '0');
                    rect.setAttribute('width', '800');  // Assuming the SVG is 500x500
                    rect.setAttribute('height', '836');
                    clipPath.appendChild(rect);
                    svgDoc.documentElement.appendChild(clipPath);

                    // Add image

                    // 1600 836
                    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                    image.setAttribute('href', imageUrl);
                    image.setAttribute('x', '0');
                    image.setAttribute('y', '0');

                    const svgHeight = 836;  // Assuming the SVG is 500x500
                    var scaleFactor = 1
                    console.log("IMAGE HEIGHT")
                    console.log(imageHeight)
                    if (imageHeight) {
                        scaleFactor = svgHeight / imageHeight;
                        console.log(scaleFactor)
                    }


                    // Create scaled dimensions



                    const svgWidth = 418; // Half of 836, assuming you're placing it in the left half of an 836-width SVG

                    // ... (your existing code)
                    if (alignRight) {

                        if (imageWidth) {
                            const scaledWidth = imageWidth * scaleFactor;
                            image.setAttribute('width', scaledWidth.toString());

                            // Calculate the amount to shift the image to the left.
                            const shiftAmount = (scaledWidth - svgWidth) / 2;

                            // If the scaled image is wider than the SVG area, shift it to the left.
                            if (shiftAmount > 0) {
                                image.setAttribute('x', (-shiftAmount).toString());
                            }
                        }
                    }
                    else if (imageWidth) {
                        const scaledWidth = imageWidth * scaleFactor;
                        image.setAttribute('width', scaledWidth.toString());
                    }


                    if (imageHeight) {
                        const scaledHeight = imageHeight * scaleFactor;

                        image.setAttribute('height', scaledHeight.toString());
                    }
                    image.setAttribute('clip-path', 'url(#clip-left-half)');
                    svgDoc.documentElement.appendChild(image);




                    if (textElement) {
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        if (context) {
                            context.font = '10px Poppins';  // Set the font size and family
                            const lines = wrapText(context, text, 130);  // Assume a max width of 200
                            let y = parseFloat(textElement.getAttribute('y') || '0');
                            lines.forEach((line, index) => {
                                const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                                tspan.textContent = line;
                                tspan.setAttribute('x', textElement.getAttribute('x') || '0');
                                tspan.setAttribute('dy', index === 0 ? '0' : '59');  // Set line height to 30 for all but the first line
                                tspan.setAttribute('font-family', 'Poppins');  // Set font family to Poppins

                                textElement.appendChild(tspan);
                            });


                            // lines.forEach((line, index) => {
                            //     const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                            //     tspan.textContent = line;
                            //     tspan.setAttribute('x', textElement.getAttribute('x') || '0');
                            //     tspan.setAttribute('y', (y + index * 30).toString());  // Assume a line height of 30
                            //     textElement.appendChild(tspan);
                            // });
                        }
                        textElement.setAttribute('font-size', '52');  // Set font size to 20

                    }

                    if (textElement2) {
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        if (context) {
                            context.font = '10px Poppins';  // Set the font size and family
                            const lines = wrapText(context, text2, 230);  // Assume a max width of 200
                            let y = parseFloat(textElement2.getAttribute('y') || '0');
                            lines.forEach((line, index) => {
                                const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                                tspan.textContent = line;
                                tspan.setAttribute('x', textElement2.getAttribute('x') || '0');
                                tspan.setAttribute('dy', index === 0 ? '0' : '33');  // Set line height to 30 for all but the first line
                                tspan.setAttribute('font-family', 'Poppins');  // Set font family to Poppins

                                textElement2.appendChild(tspan);
                            });


                            // lines.forEach((line, index) => {
                            //     const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                            //     tspan.textContent = line;
                            //     tspan.setAttribute('x', textElement.getAttribute('x') || '0');
                            //     tspan.setAttribute('y', (y + index * 30).toString());  // Assume a line height of 30
                            //     textElement.appendChild(tspan);
                            // });
                        }
                        textElement2.setAttribute('font-size', '32');  // Set font size to 20

                    }

                    if (imageElement) {
                        imageElement.href.baseVal = imageUrl;
                    }
                }
            });
        }
    }, [text, imageUrl, alignRight]);


    const downloadSvgAsPng = () => {
        if (svgRef.current) {
            const svgDoc = svgRef.current.contentDocument;
            if (svgDoc) {
                const originalSvgElement = svgDoc.documentElement;
                const clonedSvgElement = originalSvgElement.cloneNode(true) as SVGSVGElement;

                // Debugging line
                console.log("Cloned SVG Element:", clonedSvgElement);

                // Convert cloned SVG to string
                const serializer = new XMLSerializer();
                const svgString = serializer.serializeToString(clonedSvgElement);

                // Debugging line
                console.log("Serialized SVG String:", svgString);

                const canvas = document.createElement('canvas');
                canvas.width = 1600;
                canvas.height = 836;
                const ctx = canvas.getContext('2d');

                const img = new Image();
                img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
                img.onload = function () {
                    if (ctx) {
                        ctx.drawImage(img, 0, 0);
                        const pngData = canvas.toDataURL('image/png');
                        const a = document.createElement('a');
                        a.download = 'dynamic_graphic.png';
                        a.href = pngData;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    }
                };
            }
        }
    };




    return (
        <>
            {/* <button className='my-8 text-4xl text-white' onClick={downloadSvgAsPng}>Download as PNG</button> */}
            <object
                className="w-full py-0 h-full"
                type="image/svg+xml"
                data="/template.svg"
                ref={setSvgRef}
                width="1600"
                height="836"
            >
                Your browser does not support SVG
            </object>
        </>
    );
};

export default DynamicGraphic;
