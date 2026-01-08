/**
 * Uses the HTTP GET method and the JavaScript fetch function to fetch data, returned as an Array of Json Objects.
 * If the response from the fetch is incorrect, throws an Error.
 * @async
 * @param {string} fetchedUrl
 * @returns {JSON[]}
 */
export async function getDataFromAPI(fetchedUrl) {

    try {

        const response = await fetch(fetchedUrl, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })


        if (!response.ok) {
            throw new Error(`Response status : ${response.status}`)
        }

        const result = await response.json()
        return result


    } catch (error) {
        console.error(error.message)
    }

}