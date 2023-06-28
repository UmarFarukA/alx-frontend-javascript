function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'Success' });
        } else {
            reject({ error: 'The fake API is not working currently' })
        }
    });
}