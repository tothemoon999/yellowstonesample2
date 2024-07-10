import Client from "@triton-one/yellowstone-grpc";



const main = async () => {
    const client = new Client("http://192.168.1.112:83", undefined, undefined);

    // now you can call the client methods, e.g.:
    
    const version = await client.getVersion(); // gets the version information
    console.log(version);
}


main();

