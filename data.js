const SHEET_URL =
'https://docs.google.com/spreadsheets/d/e/2PACX-1vR9CBBghY1D02UeyAvxSoskHBLFQyuBDD7Z39c0KOyZPfbcCAKvsEsTxTnCEUporwPAuC9mh4q-BIW8/pub?output=csv';

async function loadCurriculum() {

    const response = await fetch(SHEET_URL);
    const csvText = await response.text();

    return Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true
    }).data;

}
