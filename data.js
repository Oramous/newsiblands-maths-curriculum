const SHEET_URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR9CBBghY1D02UeyAvxSoskHBLFQyuBDD7Z39c0KOyZPfbcCAKvsEsTxTnCEUporwPAuC9mh4q-BIW8/pub?output=csv";

async function loadCurriculum() {

    const response = await fetch(SHEET_URL);

    const text = await response.text();

    return parseCSV(text);

}

function parseCSV(text){

    const rows = text.trim().split("\n");

    const headers =
    rows[0].split(",");

    return rows.slice(1).map(row=>{

        const values = row.split(",");

        let obj = {};

        headers.forEach((h,i)=>{

            obj[h.trim()] =
            values[i]?.trim() || "";

        });

        return obj;

    });

}
