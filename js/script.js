const {createApp} = Vue;

createApp ({

    data() {
        return {
            istantMail: null,
        }
    },

    mailGenerata() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {

        console.log(res);

        });
    }

}).mount('#app');