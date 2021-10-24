return {
    statusCode: 200,
    headers: {
        "Content-Type": ["application/json"],
    },
    body: JSON.stringify({
        user: {
            id: "e7d501015f383003a85959995366a06a",
            username: "test@example.com",
        },
        accessToken:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlN2Q1MDEwMTVmMzgzMDAzYTg1OTU5OTk1MzY2YTA2YSIsInlnZ3QiOiJjZDk5ZWZlNWM5YTE2NzRkYmNiOGE0NTFkN2ZiOWZiMiIsInNwciI6ImU1MGU1YjU2MmNhM2M0MWYzNTYzMTg2N2E3Y2IxNGM1IiwiaXNzIjoiWWdnZHJhc2lsLUF1dGgiLCJleHAiOjE2MTA3MDA5OTEsImlhdCI6MTYxMDUyODE5MX0.FeavRu8RQWFX_uQCmXlSEmF9J3pgZOB4X-_fRW7QwZk",
        clientToken: request.body.clientToken,
        selectedProfile: {
            name: "Example",
            id: "e50e5b562ca3c41f35631867a7cb14c5",
        },
        availableProfiles: [
            {
                name: "Example",
                id: "e50e5b562ca3c41f35631867a7cb14c5",
            },
        ],
    }),
};
