import type { NextApiRequest, NextApiResponse } from 'next';
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { NextResponse } from 'next/server';

// Configure AWS DynamoDB
const clientConfig = {
    region: "us-east-1",
    credentials: {
        accessKeyId: "default",
        secretAccessKey: "default"
    }
};

// Update credentials if environment variables are set
if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
    clientConfig.credentials = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    };
}

const dynamoDBClient = new DynamoDBClient(clientConfig);

// API route to insert email and name into UserData table
export async function POST(request: Request) {

    console.log("ERE")
    const { email, name } = await request.json()

    // const { email, name } = req.body;

    // Validate email and name
    if (!email || !name) {
        console.log("FAILE")
        return NextResponse.json({ error: "Email and name are required" });

        // res.status(400).json({ error: 'Email and name are required' });
    }

    // Create a PutItemCommand to insert the email and name
    const putItemCommand = new PutItemCommand({
        TableName: "waitlist-eaxy",
        Item: {
            ID: { S: email },
            name: { S: name }
        }
    });

    try {
        await dynamoDBClient.send(putItemCommand)
        console.log("k");
        return NextResponse.json({ message: 'Email and name inserted successfully' });
    }
    catch (error) {
        console.error('Error inserting data:', error);
        console.log("l")
        return NextResponse.json({ error: "Error inserting data" });

        // res.status(500).json({ error: 'Failed to insert data' });
    }
}
