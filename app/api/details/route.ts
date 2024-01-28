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

export async function POST(request: Request) {
    const data = await request.json();
    console.log("HERE\n\n\n\n\n")

    console.log(data)



    const userid = data.userid;
    console.log(userid)


    // Check for userid
    if (!userid) {
        return NextResponse.json({ error: "User ID is required" });
    }

    // Remove userid from the data object to prevent it from being inserted twice
    delete data.userid;

    // Dynamically construct the Item for PutItemCommand
    const item: { [key: string]: any } = {
        userid: { S: userid }
    };

    Object.entries(data).forEach(([key, value]) => {
        if (typeof value === 'string') {
            item[key] = { S: value };
        } else {
            // Handle other data types (e.g., numbers, booleans) as needed
            // Example for number:
            // if (typeof value === 'number') {
            //     item[key] = { N: value.toString() };
            // }
        }
    });

    const putItemCommand = new PutItemCommand({
        TableName: "TalUsers",
        Item: item
    });
    console.log(putItemCommand)


    try {
        await dynamoDBClient.send(putItemCommand);
        return NextResponse.json({ message: 'Data inserted successfully' });
    } catch (error) {
        console.error('Error inserting data:', error);
        return NextResponse.json({ error: "Error inserting data" });
    }
}
