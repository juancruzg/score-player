<template lang="html">
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column bars" v-for="(note, index) in notes" v-bind:key="index">
                    <bars v-model="notes[index]"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Bars from "./Bars";
import Beat from "./classes/Beat";
import Chord from "./classes/Chord";
import Note from "./classes/Note";

export default {
    components: { Bars },
    data() {
        return {
            notes: []
        };
    },
    mounted() {
        this.notes.push(
            new Beat(
                [
                    new Chord(
                        [
                            new Note("A", "half", "up", 0, false),
                            new Note("B", "half", "up", 0, false),
                            new Note("C", "half", "up", 0, false),
                            new Note("D", "half", "up", 0, false),
                            new Note("E", "half", "up", 0, false),
                            new Note("F", "half", "up", 0, false),
                            new Note("G", "half", "up", 0, false),
                            new Note("E", "half", "up", 1, false),
                            new Note("F", "half", "up", 1, false)
                        ]
                    ),
                    new Chord(
                        [
                            new Note("E", "whole", "up", 0, false),
                            new Note("F", "whole", "up", 0, false),
                            new Note("G", "whole", "up", 0, false)
                        ]
                    ),
                    new Chord(
                        [
                            new Note("E", "quarter", "up", 0, false),
                            new Note("F", "quarter", "up", 0, false),
                            new Note("G", "quarter", "up", 0, false)
                        ]
                    ),
                    new Chord(
                        [
                            new Note("E", "quarter", "up", 0, false),
                            new Note("F", "quarter", "up", 0, false),
                            new Note("G", "eighth", "up", 0, false)
                        ]
                    ),
                    new Chord(
                        [
                            new Note("E", "quarter", "up", 0, false),
                            new Note("F", "quarter", "up", 0, false),
                            new Note("G", "sixteenth", "up", 0, false)
                        ]
                    ),
                    new Chord(
                        [
                            new Note("E", "quarter", "up", 0, false),
                            new Note("F", "quarter", "up", 0, false),
                            new Note("G", "quarter", "up", 0, false)
                        ]
                    ),
                    new Chord(
                        [
                            new Note("E", "quarter", "up", 0, false),
                            new Note("F", "quarter", "up", 0, false),
                            new Note("G", "quarter", "up", 0, false)
                        ]
                    )
                ]
            ),
            new Beat(
                [
                    new Chord(
                        [
                            new Note("A", "half", "up", 0, false),
                            new Note("B", "half", "up", 0, false),
                            new Note("C", "half", "up", 0, false)
                        ]
                    ),
                    new Chord(
                        [
                            new Note("E", "quarter", "up", 0, false),
                            new Note("F", "quarter", "up", 0, false),
                            new Note("G", "quarter", "up", 0, false)
                        ]
                    )
                ]
            )
        );
    }
}
</script>

<style lang="css">
.bars.column {
    padding-left: 0;
    padding-right: 0;
}
</style>
