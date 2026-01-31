async function sendDataToAPI(url, formData) {

    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: formData
        })

        if (!response.ok) {
            throw new Error(`Response status : ${response.status}`)
        }

        const result = await response.json()
        return result

    } catch (error) {
        console.error(error)
    }



}