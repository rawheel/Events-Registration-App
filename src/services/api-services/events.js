  
import axios from 'axios'


export function eventAPI() {
  
    //return axios.get('http://127.0.0.1:8000/api/events/');
    return axios.get('https://django-event-app.azurewebsites.net/api/events/');

  }

  export function eventRegAPI(data) {
  
    //return axios.post('http://127.0.0.1:8000/api/events/',data);
    return axios.post('https://django-event-app.azurewebsites.net/api/events/',data);

    
     
  }

  export function eventDel(params) {
  
    //return axios.delete(`http://127.0.0.1:8000/api/events/${params}/`);
    return axios.delete(`https://django-event-app.azurewebsites.net/api/events/${params}/`);
     
  }