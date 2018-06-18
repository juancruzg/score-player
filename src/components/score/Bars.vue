<template lang="html">
    <lines>
        <ul slot="first-line">
            <li v-for="(note, index) in notes[0]" v-bind:key="index" v-bind:class="{ 'note': note }"></li>
        </ul>
        <ul slot="first-space">
            <li v-for="(note, index) in notes[1]" v-bind:key="index" v-bind:class="{ 'note': note }"></li>
        </ul>
        <ul slot="second-line">
            <li v-for="(note, index) in notes[2]" v-bind:key="index" v-bind:class="{ 'note': note }"></li>
        </ul>
        <ul slot="second-space">
            <li v-for="(note, index) in notes[3]" v-bind:key="index" v-bind:class="{ 'note': note }"></li>
        </ul>
        <ul slot="third-line">
            <li v-for="(note, index) in notes[4]" v-bind:key="index" v-bind:class="{ 'note': note }"></li>
        </ul>
        <ul slot="third-space">
            <li v-for="(note, index) in notes[5]" v-bind:key="index" v-bind:class="{ 'note': note }"></li>
        </ul>
        <ul slot="fourth-line">
            <li v-for="(note, index) in notes[6]" v-bind:key="index" v-bind:class="{ 'note': note }"></li>
        </ul>
        <ul slot="fourth-space">
            <li v-for="(note, index) in notes[7]" v-bind:key="index" v-bind:class="{ 'note': note }"></li>
        </ul>
        <ul slot="fifth-line">
            <li v-for="(note, index) in notes[8]" v-bind:key="index" v-bind:class="{ 'note': note }"></li>
        </ul>
    </lines>
</template>

<script>
import Lines from "@/components/score/Lines";
export default {
    data() {
        return {
            notes: [
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array()
            ]
        }
    },
    props: [ "value" ],
    components: { Lines },
    methods: {
        fillBars(bars) {
            let chordsArray = bars.getChordsAsArray();
            let vm = this;

            chordsArray.forEach((arr, index) => {
                arr.forEach((note, index) => {
                    vm.notes[index].push(note);
                });
            });
        }
    },
    mounted() {
        this.fillBars(this.value);
    }
}
</script>

<style lang="css">
</style>
