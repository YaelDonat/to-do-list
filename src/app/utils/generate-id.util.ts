export const generateUniqueId =(): string => {
    const timestamp = new Date().getTime().toString();
    const random = Math.floor(Math.random() * 10000).toString(); 
    return timestamp + random;
}