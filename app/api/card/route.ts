import { NextResponse } from "next/server"

import axios from 'axios';
import cheerio from 'cheerio';

// async function getTwitterCardImage(url: string): Promise<string | null> {
//     try {
//         const response = await axios.get(url, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//             }
//         });

//         const $ = cheerio.load(response.data);
//         const twitterImageTag = $('meta[name="twitter:image"]').attr('content');

//         return twitterImageTag || null;
//     } catch (error) {
//         console.error("Error fetching URL:", error);
//         return null;
//     }
// }
function extractFirstSentence($: cheerio.Root): string | null {
    const paragraphs = $('p');
    for (let i = 0; i < paragraphs.length; i++) {
        const text = $(paragraphs[i]).text().trim();
        // Skip if the paragraph looks like a date or is too short to be content.
        if (!/^\d{1,4}[-/]\d{1,2}[-/]\d{1,2}$/.test(text) && text.length > 30) {
            return text.split('. ')[0] + '.';
        }
    }
    return null;
}

async function getTwitterCardData(url: string): Promise<{ image: string | null, title: string | null, firstSentence: string | null }> {
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://www.google.com/'

            }
            
            
            // headers: {
            //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            // }
        });

        const $ = cheerio.load(response.data);
        
        // Check both 'property' and 'name' attributes for image
        const twitterImageTag = $('meta[property="og:image"]').attr('content') || $('meta[name="twitter:image"]').attr('content');
        const pageTitle = $('meta[property="og:title"]').attr('content') || $('meta[name="twitter:title"]').attr('content') || $('title').text();

        // Assuming the article content is within a <p> tag. Adjust the selector if necessary.
        const firstSentence = extractFirstSentence($);

        return {
            image: twitterImageTag || null,
            title: pageTitle || null,
            firstSentence: firstSentence || null
        };
    } catch (error) {
        console.error("Error fetching URL:", error);
        return {
            image: null,
            title: null,
            firstSentence: null
        };
    }
}

// Assuming extractFirstSentence function is defined elsewhere in your code

// async function getTwitterCardData(url: string): Promise<{ image: string | null, title: string | null, firstSentence: string | null }> {
//     try {
//         const response = await axios.get(url, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//             }
//         });

//         const $ = cheerio.load(response.data);
//         const twitterImageTag = $('meta[name="twitter:image"]').attr('content');
//         const pageTitle = $('title').text();

//         // Assuming the article content is within a <p> tag. Adjust the selector if necessary.
//         const firstSentence = extractFirstSentence($);

//         return {
//             image: twitterImageTag || null,
//             title: pageTitle || null,
//             firstSentence: firstSentence || null
//         };
//     } catch (error) {
//         console.error("Error fetching URL:", error);
//         return {
//             image: null,
//             title: null,
//             firstSentence: null
//         };
//     }
// }

// Example usage:
// (async () => {
//     const data = await getTwitterCardData("https://www.example.com");
//     console.log(`Image URL: ${data.image}`);
//     console.log(`Page Title: ${data.title}`);
//     console.log(`First Sentence: ${data.firstSentence}`);
// })();






export async function POST(request: Request) {

    const { url } = await request.json()
    const data = await getTwitterCardData(url);
    console.log(data)
    //     const data = await getTwitterCardData("https://www.example.com");
    // console.log(`Image URL: ${data.image}`);
    // console.log(`Page Title: ${data.title}`);
    // console.log(`First Sentence: ${data.firstSentence}`);

    // if (imageUrl) {
    //     console.log(`Twitter card image URL: ${imageUrl}`);
    // } else {
    //     console.log("No Twitter card image found!");
    // }



    // // console.log(data)

    return NextResponse.json({ data: data })


}