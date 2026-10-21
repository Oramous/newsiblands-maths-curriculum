const SHEET_URL =
'https://docs.google.com/spreadsheets/d/e/2PACX-1vR9CBBghY1D02UeyAvxSoskHBLFQyuBDD7Z39c0KOyZPfbcCAKvsEsTxTnCEUporwPAuC9mh4q-BIW8/pub?output=csv';

async function loadCurriculum() {

    const response = await fetch(SHEET_URL);
    const text = await response.text();

    const rows = text.trim().split('\n');

    const headers = rows[0]
        .split(',')
        .map(h => h.trim());

    return rows.slice(1).map(row => {

        const values = row.split(',');

        let obj = {};

        headers.forEach((header, i) => {
            obj[header] = values[i] || '';
        });

        return obj;

    });

}
