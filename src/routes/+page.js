import sanityClient from "@sanity/client";

const client = sanityClient({
projectId: "a70jffeo",
dataset: "production",
apiVersion: "2021-10-21",
useCdn: false
});

export async function load() {

    const data = await client.fetch(
        `*[_type == "periodesystem"] | order(atomnummer asc)`
        );
    
    if (data) {
    
        return {
        grs: data
        
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };

}


