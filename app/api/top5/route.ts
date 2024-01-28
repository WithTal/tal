
import { NextApiRequest, NextApiResponse } from "next";
import mysql from 'mysql';
import { NextResponse } from "next/server";

// initialize your database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});



// export async function POST(request: Request) {
//     console.log("TOP 5")
//     const data = await request.json();
//     console.log(data)

//     const user_id  = data.user_id;

//     const query = `
//         SELECT website_url  
//         FROM visited 
//         WHERE user_id = ? 
//         ORDER BY visited_at DESC
//         LIMIT 100
//     `;

//     console.log(query)

//     db.connect();

//     db.query(query, [user_id], (err: any, results: any) => {
//         console.log(results)
//         console.log(err)
//         if (err) {
//             return NextResponse.json({ message: 'ERROR' });
//         }

//         const uniqueSites = Array.from(new Set(results.map((r: any) => r.website_url))).slice(0, 5);

//         return NextResponse.json({ uniqueSites });
//     });

//     db.end();
// }

export async function POST(request: Request) {
    console.log("TOP 5")
    const data = await request.json();
    console.log(data)

    const user_id = data.user_id;



    const query = `
    SELECT website_url, visited_at 
    FROM visited 
    WHERE user_id = ? 
    ORDER BY visited_at DESC
    LIMIT 5
  `;


    console.log(query)

    db.connect();
    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, [user_id], (err: any, result: any) => {
                console.log("Query executed");
                console.log(result);
                if (err) {
                    console.log("Error occurred");
                    console.log(err);
                    reject(err);
                } else {
                    console.log("Results obtained");
                    console.log(result);
                    resolve(result);
                }
            });
        });

        db.end();
        console.log("Data fetched successfully");
        console.log(results);
        return NextResponse.json({ message: 'Data inserted successfully', results });
    } catch (error) {
        db.end();
        console.log("Error occurred");
        console.log(error);
        return NextResponse.json({ message: 'ERROR' });
    }

    // db.query(query, [user_id], (err: any, results: any) => {
    //     console.log(results)
    //     console.log(err)
    //     if (err) {
    //         return NextResponse.json({ message: 'ERROR' });
    //         // res.status(500).json({ message: "An error occurred on the server" });
    //         // return;
    //     }
    //     db.end();
    //     return NextResponse.json({ message: 'Data inserted successfully', results });

    //     // return NextResponse.json({ results });
    //     // res.status(200).json(results);
    // });

    // return NextResponse.json({ message: 'Data inserted successfully' });
}
