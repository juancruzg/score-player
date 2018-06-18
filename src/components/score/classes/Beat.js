export default class Beat {
    constructor(chords, isAnacrusic) {
        this.chords = chords;
        this.isAnacrusic = isAnacrusic;
    }

    getChordsAsArray() {
        let chords = this.chords.map(chord => {
            let notes = [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ];

            chord.notes.forEach(note => {
                let line = note.getLine();

                notes[line-1] = {
                    tone: note.tone,
                    direction: note.direction,
                    figure: note.figure
                };
            });

            return notes;
        });
        return chords;
    }
}
