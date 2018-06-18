<template lang="html">
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column bars">
                    <bars />
                </div>
                <div class="column bars">
                    <bars />
                </div>
                <div class="column bars">
                    <bars />
                </div>
            </div>
            <div class="columns">
                <div class="column bars">
                    <bars />
                </div>
                <div class="column bars">
                    <bars />
                </div>
                <div class="column bars">
                    <bars />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Bars from "./Bars";
export default {
    components: { Bars }
}
</script>

<style lang="css">
.bars.column {
    padding-left: 0;
    padding-right: 0;
}
</style>
