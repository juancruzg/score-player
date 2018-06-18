export default class Note {
    constructor(tone, figure, direction, octave, isSilence) {
        this.tone = tone;
        this.figure = figure;
        this.direction = direction;
        this.octave = octave;
        this.isSilence = isSilence;
    }

    getLine() {
        let noteKeys = [];

        noteKeys["E"] = 1;
        noteKeys["F"] = 2;
        noteKeys["G"] = 3;
        noteKeys["A"] = 4;
        noteKeys["B"] = 5;
        noteKeys["C"] = 6;
        noteKeys["D"] = 7;

        return noteKeys[this.tone] + (this.octave * 7);
    }
}
