export const Root = process.env.NODE_ENV === "development" ? {
    adminUrl: "https://carepeople.ca/",
    // adminUrl: "http://localhost:5000/"
}
 :
{
    adminUrl: "https://carepeople.ca/",
}