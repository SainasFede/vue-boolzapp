const { createApp } = Vue;

const DateTime = luxon.DateTime;
console.log(DateTime);

const now = DateTime.now();
console.log(now.minute, now.second);

const timeMsg = now.setLocale('it').toLocaleString(DateTime.TIME_SIMPLE);
console.log(timeMsg);

createApp({
  data(){
    return{
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          id: 'true',
          messages: [
              {
              date: '10/01/2020',
              time: '15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
              },
              {
              date: '10/01/2020', time: '15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
          ],

        },
  
        {
          name: 'Fabio',
          avatar: 'img/avatar_2.jpg',
          id: 'true',
          messages: [
              {
              date: '20/03/2020',
              time: '16:30',
              message: 'Ciao come stai?',
              status: 'sent'
              },
              {
              date: '20/03/2020',
              time: '16:30',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
              },
              {
              date: '20/03/2020',
              time: '16:35',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
              }
          ],

        },
  
        {
          name: 'Samuele',
          avatar: 'img/avatar_3.jpg',
          id: 'true',
          messages: [
              {
              date: '28/03/2020', time: '10:10',
              message: 'La Marianna va in campagna',
              status: 'received'
              },
              {
              date: '28/03/2020',
              time: '10:20',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
              },
              {
              date: '28/03/2020',
              time: '16:15',
              message: 'Ah scusa!',
              status: 'received'
              }
          ],

        },
  
        {
          name: 'Alessandro B.',
          avatar: 'img/avatar_4.jpg',
          id: 'true',
          messages: [
              {
              date: '10/01/2020', time: '15:30',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
              },
              {
              date: '10/01/2020', time: '15:50',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
              }
          ],

        },
  
        {
          name: 'Alessandro L.',
          avatar: 'img/avatar_5.jpg',
          id: 'true',
          messages: [
              {
              date: '10/01/2020', time: '15:30',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
              },
              {
              date: '10/01/2020', time: '15:50',
              message: 'Va bene, stasera la sento',
              status: 'received'
              }
          ],

        },
  
        {
          name: 'Claudia',
          avatar: 'img/avatar_6.jpg',
          id: 'true',
          messages: [
              {
              date: '10/01/2020',
              time: '15:30',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
              },
              {
              date: '10/01/2020', time: '15:50',
              message: 'Non ancora',
              status: 'received'
              },
              {
              date: '10/01/2020', time: '15:51',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
              }
          ],

        },
  
        {
          name: 'Federico',
          avatar: 'img/avatar_7.jpg',
          id: 'true',
          messages: [
              {
              date: '10/01/2020',
              time: '15:30',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
              },
              {
              date: '10/01/2020', time: '15:50',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
              }
          ],

        },
  
        {
          name: 'Davide',
          id: 'true',
          avatar: 'img/avatar_8.jpg',
          messages: [
              {
              date: '10/01/2020',
              time: '15:30',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
              },
              {
              date: '10/01/2020', time: '15:50',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
              },
              {
              date: '10/01/2020', time: '15:51',
              message: 'OK!!',
              status: 'received'
              }
          ],

        }
        ],
        activeProfile: 0,
        myNewMsg: '',
        findChat: ''
    };
    
  },
  methods:{
    selectChat(index){
      this.activeProfile = index;
    },

    sendMyMsg(){
      const msgComplete = {
        date: '7/11/2022',
        time: timeMsg,
        message: this.myNewMsg,
        status: 'sent'
      }
      setTimeout(this.botMsg, 3000); 
      this.contacts[this.activeProfile].messages.push(msgComplete);
      this.myNewMsg = '';
    },

    botMsg(){
      const botword = {
        date: '7/11/2022',
        time: timeMsg,
        message: 'ok',
        status: 'received'
      }
      this.contacts[this.activeProfile].messages.push(botword);
    },

    searchChat(){
      this.contacts.forEach(obj => {
        if(!obj.name.includes(this.findChat)){
          obj.id = false;
        }else{
          obj.id = true
        }
      });
    }
  }
}).mount('#app');