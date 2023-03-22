const { createApp } = Vue;

createApp ({

    
    data() {
        return {
            
            eMails: [],
            // istantMail: null,

        }
    },

    created() {

        this.mailCycle()

    },
    
    methods: {
        
        mailCycle() {
            
            for (let i = 0; i < 10; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    console.log(res);
                    // this.istantMail = res.data.response;
                    this.eMails.push(res.data.response);
                    console.log(this.eMails);
                    // debugger
                });
                

            };
            
        }

    }
    
}).mount('#app');
