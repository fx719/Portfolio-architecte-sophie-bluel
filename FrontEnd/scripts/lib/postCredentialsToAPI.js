/**
* Uses the HTTP GET method and the JavaScript fetch function to fetch data, returned as a JSON.
 * If the response from the fetch is incorrect, throws an Error.
 * @async
 * @param {string} fetchedUrl
 * @param {string} userEmailData (usually a HTMLElement.value)
 * @param {string} userPasswordData (usually a HTMLElement.value)
 */
async function postCredentialsToAPI(fetchedUrl, userEmailData, userPasswordData) {

    try {

        const response = await fetch(fetchedUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: userEmailData, password: userPasswordData })
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