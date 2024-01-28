// pages/api/queryUUID.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";

// Configure AWS DynamoDB
// const dynamoDBClient = new DynamoDBClient({
//     region: "us-east-1", // Replace with your AWS region
//     // credentials, if required
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     },
// });

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

    const id = "sess_2ba8VVx9C4iITzGMSiHr3HTl1sP"

    // Query the item in DynamoDB
    const queryCommand = new QueryCommand({
        TableName: "TalUsers",
        KeyConditionExpression: "userid  = :v",
        ExpressionAttributeValues: {
            ":v": { S: id }
        }
    });
    console.log(queryCommand)

    try {
        const response = await dynamoDBClient.send(queryCommand);
        return NextResponse.json({ items: response.Items });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to query items" });
    }
}
