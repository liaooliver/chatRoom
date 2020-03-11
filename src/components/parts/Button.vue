<template>
    <button type="submit">
        <slot></slot>
    </button>
</template>

<script>
export default {
};
</script>

<style lang="scss">
button{
    padding: 5px 20px;
    border-radius: 25px;
    border-color: #fff;
    background-color: transparent;
    color: #fff
}
</style>
