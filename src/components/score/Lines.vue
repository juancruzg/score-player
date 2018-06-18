<template lang="html">
    <div class="bar">
        <div class="line">
            <slot name="fifth-line" />
        </div>
        <div class="space">
            <slot name="fourth-space" />
        </div>
        <div class="line">
            <slot name="fourth-line" />
        </div>
        <div class="space">
            <slot name="third-space" />
        </div>
        <div class="line">
            <slot name="third-line" />
        </div>
        <div class="space">
            <slot name="second-space" />
        </div>
        <div class="line">
            <slot name="second-line" />
        </div>
        <div class="space">
            <slot name="first-space" />
        </div>
        <div class="line">
            <slot name="first-line" />
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.bar {
    position: relative;
    border-right: 1px solid black;
}

.line, .space {
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    margin-top: -5px;
    position: relative;
}

.line:before, .space:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
}

.line > ul, .space > ul {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
    list-style: none !important;
    margin-left: 0 !important;
    margin-top: 15px !important;
}

.line:before {
    border-top: 1px solid black;
}

.note {
    position: relative;
}

.note::after {
    content: '';
    top: -10px;
    width: 100%;
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid black;
}

</style>
