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

const STRAND_INFO_URL =
'https://docs.google.com/spreadsheets/d/e/2PACX-1vSZaBz3BGVGvnFmWa-VUvtdf_6fI3cKpVyg_EqCUY8haFmZwl8syHSRMlHQyZ0i-mQ8fdTBav0Qf52p/pub?output=csv';

async function loadStrandInfo(){

    const response = await fetch(STRAND_INFO_URL);
    const csvText = await response.text();

    return Papa.parse(csvText,{
        header:true,
        skipEmptyLines:true
    }).data;

}

const CURRICULUM_CYCLE_URL =
'https://docs.google.com/spreadsheets/d/e/2PACX-1vQCzR8dnbuegG8eX8rgndIfmfcVKOF-6kex3g0_1OakS-PwSWQzfSPdB-8T35kMROE0X-VMIv0JhHPQ/pub?output=csv';

async function loadCurriculumCycle(){

    const response =
    await fetch(CURRICULUM_CYCLE_URL);

    const csvText =
    await response.text();

    return Papa.parse(csvText,{
        header:true,
        skipEmptyLines:true
    }).data;

}
