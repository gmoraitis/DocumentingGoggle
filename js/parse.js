// Parse (Unused for now)
/**
 * parse.js
 *
 * MediaWiki API Demos
 * Demo of `Parse` module: Parse content of a wiki page
 *
 * MIT License
 */

const url = "https://en.wikipedia.org/w/api.php?" +
    new URLSearchParams({
        origin: "*",
        action: "parse",
        page: "List_of_Google_products",
        format: "json",
        "redirects":[],
        "links":[],
        "iwlinks":[],
        "externallinks":[]
    });

try {
    (async function () {
        const req = await fetch(url);
        const json = await req.json();
        // console.log(json.parse.text["*"]);
    })()
} catch (e) {
    console.error(e);

}