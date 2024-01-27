const AWS = require('aws-sdk');
const sharp = require('sharp');
const fs = require('fs');

// Initialize AWS SDK
AWS.config.update({
    accessKeyId: 'YOUR_AWS_ACCESS_KEY',
    secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY',
    region: 'YOUR_AWS_REGION'
});

interface S3UploadResponse {
    Location: string;
    // add other fields you may need
}


const s3 = new AWS.S3();

const uploadToS3 = async (buffer: Buffer, fileName: string): Promise<S3UploadResponse> => {
    const params = {
        Bucket: 'YOUR_BUCKET_NAME',
        Key: fileName,
        Body: buffer,
        ContentType: 'image/png',
        ACL: 'public-read'
    };

    return new Promise((resolve, reject) => {
        s3.upload(params, function (err: any, data: any) {
            if (err) {
                return reject(err);
            }
            resolve(data as S3UploadResponse);
        });
    });
};

// Assume you have your SVG content as a string or buffer
const svgContent = fs.readFileSync('path/to/your.svg'); // replace with actual SVG content

// Convert SVG to PNG using Sharp
sharp(svgContent)
    .png()
    .toBuffer()
    .then(async (buffer: Buffer) => {
        const fileName = `your-twitter-card-${Date.now()}.png`;
        const uploadResponse: S3UploadResponse = await uploadToS3(buffer, fileName);
        console.log('Successfully uploaded:', uploadResponse.Location);
    })
    .catch((err: Error) => {
        console.error('Error occurred:', err);
    });
