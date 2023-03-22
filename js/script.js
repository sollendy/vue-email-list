const { createApp } = Vue;

createApp ({

    eMails: [],

    data() {
        return {
            istantMail: null,
        }
    },

    created() {
        mailCycle()
    },
    
    methods: {
        
        mailCycle() {
            
            for (let i = 0; i < 10; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    console.log(res);
                    this.istantMail = res.data.response;
                    this.eMails.push(istantMail);
                });
                
                console.log(eMails);

            };
            
        }

    }
    
}).mount('#app');
