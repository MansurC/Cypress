
In this repo you will find two tests (in e2e directory) that focuses on intercept and mock of the GET request.

These tests are as follows:

TestPetstoreAPI.js:
This file uses a separate fixture (mockedPetStatus.js) with a HTTP request body that will be used when intercept and
mock GET request. Each specification field of returned JSON is tested separately for validation of integrity of
intercepted and mocked JSON.

TestPetstoreID.js:
This file contains an example of an HTTP request body that is directly included in the JSON file itself and will
intercept and mock JSON response. The entire test is used to validate the capability to intercept and mock JSON.