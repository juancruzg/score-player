export default class Note {
    constructor(tone, figure, direction, octave, isSilence) {
        this.tone = tone;
        this.figure = figure;
        this.direction = direction;
        this.octave = octave;
        this.isSilence = isSilence;
    }
}
