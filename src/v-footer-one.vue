<template>
    <div class="footer">
        <div class="title">Хотите сделать проект?</div>
        <small>Давайте обсудим. Подумаем. И сделаем!</small>
        <form
                accept-charset="UTF-8"
                v-on:submit.prevent="onSubmit()"
                method="POST"
                enctype="multipart/form-data"
                id="ajaxForm"
        >
            <input type="text" name="name" id="name" v-model="sumData.name" placeholder="Представьтесь, пожалуйста:"
                   class="input">

            <input type="text" name="mes" id="mes" v-model="sumData.mes" placeholder="Как с вами связаться?"
                   class="input">

            <input type="text" name="massage" id="massage" v-model="sumData.massage"
                   placeholder="Расскажите о вашем проекте:" class="input">

            <div class="input__wrapper">
                <img src="./assets/img/skrepca.png">
                <input name="file" id="file" type="file" @change="processFile($event)">
                <label for="file">выберите файл</label>
            </div>

            <button type="button" @click="onSubmit()" ref="header">Отправить</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "v-footer-one",
        data() {
            return {
                sumData: {
                    name: '',
                    mes: '',
                    massage: '',
                    file: []
                },
                url: 'https://getform.io/f/1408e9a3-772b-4a41-87be-67515513d373',
                act: false,
                isSuccess: false
            }
        },
        methods: {
            processFile(event) {
                this.sumData.files = event.target.files[0];
            },
            onSubmit() {
                if (this.sumData.name === '' || this.sumData.mes === '' || this.sumData.massage === '') {
                    return false;
                }
                this.$refs.header.innerText = "ОТПРАВЛЕННО"
                this.$refs.header.style.background = "green"

                let data = {
                    name: this.sumData.name,
                    mes: this.sumData.mes,
                    massage: this.sumData.massage,
                    file: this.sumData.file
                };

                window.axios
                    .post(this.url, data, {
                        headers: {
                            Accept: "application/json",
                        }
                    })
                    .then(
                        response => {
                            this.isSuccess = response.data.success ? true : false;
                            this.sumData.name = '';
                            this.sumData.mes = '';
                            this.sumData.massage = '';

                        });
            },
        }
    }
</script>

<style scoped>

    .input__wrapper {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
    }

    input[type="file"] {
        display: none;
        font-family: 'Montserrat', sans-serif;

    }

    input:focus {
        outline: none;
    }

    .input {
        margin-left: 3rem;
        width: 85%;
        margin-top: 1rem;
        background: transparent;
        color: white;
        border-top: none;
        border-right: none;
        border-left: none;
        font-size: 35px;
        font-family: 'Montserrat Alternates', sans-serif;

    }

    div.title, small, img {
        margin-left: 8.5rem;
        font-family: 'Montserrat', sans-serif;
    }

    small {
        font-size: 25px;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    div.title {
        font-size: 50px;
        font-family: 'Montserrat Alternates', sans-serif;
        font-weight: 700;
    }

    img {
        width: 40px;
        margin-top: 1rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .footer {
        background-color: #000000;
        height: 728px;
        color: aliceblue;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding-left: 10%;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    button {
        width: 20%;
        height: 47px;
        border-radius: 10px;
        text-align: center;
        margin: 0 auto;
        font-family: 'Montserrat', sans-serif;
    }

    button:focus {
        outline: none;
    }

    /*====================================================max-width: 1366========================================*/
    @media (max-width: 1366px) {
        .input {
            margin-left: 5rem;
            width: 85%;
            margin-top: 1rem;
            background: transparent;
            color: white;
            border-top: none;
            border-right: none;
            border-left: none;
            font-size: 35px;
            font-family: 'Montserrat Alternates', sans-serif;
        }
    }

    /*====================================================max-width: 1366========================================*/
    /*====================================================max-width: 1024px========================================*/
    @media (max-width: 1024px) {
        .footer{
            margin-bottom: 0;
            background-color: #000000;
            color: aliceblue;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            padding-right: 7rem;
            height: 29rem;
        }

        button {
            text-align: center;
            font-family: 'Montserrat', sans-serif;
            margin-top: 1rem;
        }

        .input {
            font-size: 1.7rem;
        }

        div.title, small, img {
            margin-left: 10%;
        }
        div.title {
            font-size: 43px;
            font-family: 'Montserrat Alternates', sans-serif;
            font-weight: 700;
        }
    }

    /*====================================================max-width: 768px========================================*/
    @media (max-width: 768px) {
        img {
            width: 40px;
            margin-top: 1rem;
        }
        button {
            text-align: center;
            font-family: 'Montserrat', sans-serif;
            margin-top: 1rem;
        }

        .input {
            font-size: 1.7rem;
        }
        div.title {
            font-size: 33px;
            font-weight: 700;
        }
        small{
            font-size: 23px;
            font-family: 'Montserrat Alternates', sans-serif;
        }
    }

    /*====================================================max-width: 414========================================*/
    @media (max-width: 414px) {
        @media screen and (-webkit-min-device-pixel-ratio:0) {
            button {
                width: 100%;
                height: auto;
                line-height: 24px;
                font-size: 14px;
                background-color: #efefef;
                color: #000;
            }
            .input__wrapper {
                margin-top: 15px;
            }
        }
        div.title, small, img {
            margin-left: 16%;
        }
        label{
            font-size: 88%;
        }

        button {
            width: 66%;
            height: 5%;
            border-radius: 10px;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: 1rem;
        }

        .footer {
            background-color: #000000;
            color: aliceblue;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            height: auto;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 16px;
        }

        .footer div.title {
            font-size: 18px;
            font-family: 'Montserrat Alternates', sans-serif;
            margin-left: 0;
            margin-top: 10%;
            font-weight: 700;
        }

        .footer small {
            margin-left: 0;
        }

        small {
            font-size: 12px;
        }

        .input__wrapper {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
        }

        .input {
            margin-left: 0;
            width: 64%;
            margin-top: 1rem;
            background: transparent;
            color: white;
            border-top: none;
            border-right: none;
            border-left: none;
            font-size: 13px;
            font-family: 'Montserrat Alternates', sans-serif;

        }

        img {
            width: 5%;
            margin-top: 0;
        }
    }

    /*====================================================max-width: 414========================================*/
    /*====================================================max-width: 320========================================*/
    @media (max-width: 320px) {
        button {
            width: 88%;
            height: 5%;
            border-radius: 10px;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: 1rem;
        }

        .footer {
            background-color: #000000;
            color: aliceblue;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            height: auto;
            padding-left: 0;
            padding-right: 0;
        }

        div.title {
            font-size: 18px;
            font-family: 'Montserrat Alternates', sans-serif;
            font-weight: 700;
        }

        div.title, small, img {
            margin-left: 0;
        }

        small {
            font-size: 12px;
        }

        .input__wrapper {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            padding-left: 7%;
            padding-top: 2%;
        }

        .input {
            margin-left: 0;
            width: 87%;
            margin-top: 1rem;
            background: transparent;
            color: white;
            border-top: none;
            border-right: none;
            border-left: none;
            font-size: 13px;
            font-family: 'Montserrat Alternates', sans-serif;

        }
    }
    /*====================================================max-width: 320========================================*/

</style>

