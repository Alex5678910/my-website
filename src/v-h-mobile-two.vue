<template>
    <div class="container">
        <div class="fixed">
            <img src="./assets/img/list.png" alt="" class="list" @click="openSlide">
        </div>
        <div class="title">7 причин</div>
        <ul>
            <li>Повышение продаж</li>
            <li>Отвязка от конкурентов</li>
            <li>Лояльность клиентов</li>
            <li>Формирование доверия<br>
                <span>клиентов посредством<br></span>
                <span>Push-уведомлений</span></li>
            <li>Целевая аудитория</li>
            <li>Маркетинговые акции</li>
            <li>Связка сайта компании с<br>
                <span>приложением</span></li>
        </ul>
        <div class="flex">
            <div class="flex__item">
                <img src="./assets/img/t1.png" alt="pic">
            </div>
            <div class="flex__item">
                <img src="./assets/img/t2.png" alt="pic">
            </div>
            <div class="flex__item">
                <img src="./assets/img/t3.png" alt="pic">
            </div>
        </div>
        <div class="footer">
            <div class="digital">digital</div>
            <div class="number">02</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-h-mobile-two",
        methods: {
            openSlide() {
                window.scrollTo(0, 3100)
            }
        }
    }
</script>

<style scoped>
    .flex img.list {
        width: 52px;
        height: 52px;
    }

    .fixed {
        padding-right: 2%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }

    .list {
        position: fixed;
        right: 3%;
        top: 90%;
    }

    .footer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin: 0 14%;
    }

    .number {
        font-size: 40px;
        color: black;
        font-family: 'Montserrat', sans-serif;
    }

    .digital {
        font-size: 9px;
        color: black;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        margin-top: 5%;
    }

    .flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin: 0 14%;
    }

    .flex__item {
        -webkit-box-flex: .5;
        -ms-flex: .5 .5 auto;
        flex: .5 .5 auto;
    }

    .flex img {
        width: 67px;
        height: 131px;
    }

    li span {
        margin-left: 5%;
    }

    li::before {
        content: "";
        background-color: #5A1212;
        width: .5rem;
        height: .5rem;
        display: inline-block;
        line-height: 2rem;
        text-align: center;
        margin-right: 0.5rem;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        vertical-align: middle;
    }

    li {
        font-size: 20px;
        color: #5a1212;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        text-align: left;
        list-style: none;
    }

    div.title {
        font-size: 30px;
        color: #5a1212;
        font-family: 'Montserrat', sans-serif;
        margin: 40px 0;
        font-weight: 700;
    }

    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container {
            display: none;
        }
    }

    /* =======================================min-width: 414px==================================*/
    /* =======================================min-width: 360px==================================*/
    @media (max-width: 360px) {
        li {
            font-size: 17px;
            color: #5a1212;
            font-family: 'Montserrat', sans-serif;
            font-weight: normal;
            text-align: left;
            list-style: none;
        }
    }

    /* =======================================min-width: 360px==================================*/
    /* =======================================min-width: 320px==================================*/
    @media (max-width: 320px) {
        li {
            font-size: 15px;
            color: #5a1212;
            font-family: 'Montserrat', sans-serif;
            font-weight: normal;
            text-align: left;
            list-style: none;
        }
    }

    /* =======================================min-width: 320px==================================*/

</style>
