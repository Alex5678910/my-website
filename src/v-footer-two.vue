<template>
    <div class="footer">
        <div class="img">
            <img src="./assets/img/phone.png" alt="pic">
            <img src="./assets/img/mail.png" alt="pic">
        </div>
        <div class="contact">
            <a href="tel: 7(927)-770-77-75">+7(927)-770-77-75</a>
            <a href="#">webkiwi.org@gmail.com</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-footer-two"
    }
</script>

<style scoped>
    .contact {
        padding-top: 0;
        text-align: left;
    }

    a:nth-child(2) {
        padding-top: 2rem;
    }

    img:nth-child(2) {
        padding-top: 1rem;
    }

    .img {
        padding: 1rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-top: 0;
    }

    .footer {
        color: black;
        background-color: white;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-left: 15%;
        height: 3%;
    }

    a {
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        color: black;
    }

    /*====================================================max-width: 1366========================================*/
    @media (max-width: 1366px) {

    }
    /*====================================================max-width: 1366========================================*/
    /*====================================================max-width: 1024========================================*/
    @media (max-width: 1024px) {
        .footer {

        }
    }
    /*====================================================max-width: 1024========================================*/
    /*====================================================max-width: 768========================================*/
    @media (max-width: 768px) {

    }
    /*====================================================max-width: 768========================================*/
    /*====================================================max-width: 414========================================*/
    @media (max-width: 414px) {
        .footer {
            color: black;
            background-color: white;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding-left: 0;
        }
        a{
            font-size: 17px;
        }
    }
    /*====================================================max-width: 414========================================*/
    /*====================================================max-width: 360========================================*/
    @media (max-width: 360px) {
        .footer {
            color: black;
            background-color: white;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding-left: 0;
        }
        a{
            font-size: 13px;
        }
    }
    /*====================================================max-width: 360========================================*/

</style>
