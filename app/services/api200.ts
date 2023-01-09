const baseURL = 'https://httpstat.us/200/'

export const api200 = async (payload: object) => {
    // console.log("in service", payload)
    try {
        if(payload) {
            const response: any = await fetch(`${baseURL}${payload}`);
            // console.log('response', response);
            if(!response.error) {
                console.log('API called succsessfully')
            } else {
                console.log('Error in calling API:', response.error)
            }
        } else {
            console.log("Could not get payload");
        }
    } catch (error) {
        console.log(error);
    }
}
