const mockNotes = require('./mockData/notes');

const buildNotes = () => {
    const numberOfNotes = Math.floor(Math.random() * 5)
    let note = '';
    let noteRecommendation = [ 'sun', 'mon', 'tue', 'wed', 'thur' , 'fri', 'sat'];
    for (let index = 0; index < 5; index++) {
        const choice = Math.floor(Math.random() * (mockNotes.length - 1));
        note = note + ' ' + mockNotes[choice].text;
    }
    return {
        note,
        noteRecommendation
    };

}

function updateRecommendation(noteRecommendation, mockNote) {
    if (mockNote.goodDays) {
        noteRecommendation
    }
}

module.exports = {
    buildNotes
}