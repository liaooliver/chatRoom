<template>
    <div class="notFind">
        <p>Oops!! 找不到此頁面!!</p>
        <router-link tag="h3" to='/'>按我返回首頁</router-link>
    </div>
</template>

<style lang="scss">
.notFind{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-weight: bold;
        font-size: 2em;
    }

    h3{
        margin-top: 20px;
        font-weight: bold;
        font-size: 1.2em;
        cursor: pointer;
        &:hover {
            color: #4A90E2;
        }
    }
}
</style>
