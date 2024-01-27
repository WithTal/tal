
// pages/api/createUUID.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

import { v4 as uuidv4 } from 'uuid';

// Configure AWS DynamoDB
const clientConfig = {
    region: "us-east-1",
    credentials: {
        accessKeyId: "default",
        secretAccessKey: "default"
    }
};

if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
    clientConfig.credentials = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    };
}

const dynamoDBClient = new DynamoDBClient(clientConfig);




import { NextResponse } from "next/server"


export async function POST(request: Request) {
    console.log("CALLED")

    const { videoID } = await request.json()

    if (!videoID) {
        return NextResponse.json({ error: "VIDEO ID Required" })
    }

    const uuid = uuidv4();

    // Prepare the item to be put in DynamoDB
    const item = {
        TableName: "minitable",
        Item: {
            videoID: { S: videoID },
            uuid: { S: uuid }
        }
    };
    console.log(item)

    // Put item in DynamoDB
    await dynamoDBClient.send(new PutItemCommand(item));

    return NextResponse.json({ uuid: uuid })


    // return res.status(200).json({ videoID, uuid });


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



}

