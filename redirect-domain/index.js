exports.handler = async (event) => {
    const request = event.Records[0].cf.request;

    if (request.headers.host[0].value === 'sample.com') {
        return {
            status: '301',
            statusDescription: `Redirecting to www domain`,
            headers: {
                location: [{
                    key: 'Location',
                    value: `https://www.sample.com${request.uri}`
                }]
            }
        };
    }
    return request;
};