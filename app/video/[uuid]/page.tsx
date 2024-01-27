import ErrorPage from "./error"
import SectionPage from "./section"


export default async function page() {

    const d = await fetch("http://localhost:3000/api/query", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "videoID": "HI" }) // body data type must match "Content-Type" header
    }).then((response) => response.json())
    console.log("ITEM")
    console.log(d.items)
    if (d.items.length==0){
        return (
            <ErrorPage />
        )
    }
    const ID = d.items[0]['uuid']['S']
    // console.log();
    const chartdata = [{ 'sentiment': 'Extremely Negative', 'Average Video': 0, 'The Pragmatic Engineer': 0.0 }, { 'sentiment': 'Negative', 'Average Video': 0, 'The Pragmatic Engineer': 0.0 }, { 'sentiment': 'Neutral', 'Average Video': 0, 'The Pragmatic Engineer': 1.0 }, { 'sentiment': 'Positive', 'Average Video': 0, 'The Pragmatic Engineer': 86.0 }, { 'sentiment': 'Extremely Positive', 'Average Video': 0, 'The Pragmatic Engineer': 10.0 }, { 'sentiment': 'Astounding', 'Average Video': 0, 'The Pragmatic Engineer': 3.0 }]



    return (
        // <div>
            <SectionPage chartdata={chartdata} video="Live it well"/>
        // </div>
    )
}