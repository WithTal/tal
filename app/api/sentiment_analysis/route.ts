// pages/api/queryUUID.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";

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

    // Query the item in DynamoDB
    const queryCommand = new QueryCommand({
        TableName: "minitable",
        KeyConditionExpression: "videoID = :v",
        ExpressionAttributeValues: {
            ":v": { S: videoID }
        }
    });

    try {
        const response = await dynamoDBClient.send(queryCommand);
        return NextResponse.json({ items: response.Items });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to query items" });
    }
}

// import type { NextApiRequest, NextApiResponse } from 'next';
// import { DynamoDBClient, PutCommand } from "@aws-sdk/client-dynamodb";
// import fetch from 'node-fetch';

// // Configure AWS DynamoDB
// const dynamoDBClient = new DynamoDBClient({
//     region: "us-east-1", // Replace with your AWS region
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     },
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'POST') {
//         res.status(405).json({ error: 'Method not allowed' });
//         return;
//     }

//     const { videoID, UUID } = req.body;

//     if (!videoID || !UUID) {
//         res.status(400).json({ error: "videoID and UUID are required" });
//         return;
//     }

//     try {
//         // Call API Gateway with videoID
//         const apiResponse = await fetch('Your_API_Gateway_Endpoint', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ videoID }),
//         });

//         if (!apiResponse.ok) {
//             throw new Error('Failed to fetch from API Gateway');
//         }

//         const apiData = await apiResponse.json();

//         // Insert data into DynamoDB
//         const putCommand = new PutCommand({
//             TableName: "minitable",
//             Item: {
//                 UUID: { S: UUID },
//                 videoID: { S: videoID },
//                 data: { S: JSON.stringify(apiData) }
//             }
//         });

//         await dynamoDBClient.send(putCommand);

//         res.status(200).json({ message: 'Data inserted successfully', data: apiData });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }
