

Beste,


Voor deze opdracht heb ik er twee JSON-bestanden gemaakt om de mock-methode te implementeren.

Deze bestanden zijn als volgt:

TestPetstoreID.js:
Dit bestand bevat een voorbeeld van een HTTP-verzoeklichaam (body) dat direct is opgenomen in het JSON-bestand zelf om
de mock-methode te simuleren. Hiermee wordt de intercept- en mock-methode getest.


TestPetstoreAPI.js:
Dit bestand bevat een aparte fixture (mockedPetStatus.js) van een HTTP-verzoeklichaam (body) die wordt gebruikt om de
mock-methode te testen. Elk veldnaam van de body wordt afzonderlijk getest voor validatie op integriteit van
intercepted and mocked body.

-----------------------------------------------------------------------------------------------------------------------

For this exercise, I created two JSON files to implement the mock method.

These files are as follows:

TestPetstoreID.js:
This file contains an example of an HTTP request body that is directly included in the JSON file itself to
simulate the mock method. The entire test is used to validate the capability of intercept and mock method.

TestPetstoreAPI.js:
This file uses a separate fixture (mockedPetStatus.js) with a HTTP request body to mock the response. Each field
in the body is tested separately for validation of integrity of intercepted and mocked response body.