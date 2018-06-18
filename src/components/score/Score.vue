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
                            new Note("A", "quarter", "up", 0, false),
                            new Note("B", "quarter", "up", 0, false),
                            new Note("C", "quarter", "up", 0, false)
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
