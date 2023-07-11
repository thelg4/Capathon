using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back-end.models
{
    public class Appointment
    {
        private dateTime date; 
        private dateTime dropTime; 
        private dateTime pickTime; 
        private String careCenter; 
        private String user; 
        private String[] dependent; 

        public dateTime GetDate(){
            return date;
        }

        public void SetDate(dateTime date){
            this.date = date; 
        }

        public dateTime GetDropTime(){
            return dropTime;
        }

        public void SetDropTime(dateTime dropTime){
            this.dropTime = dropTime; 
        }

         public dateTime GetPickTime(){
            return pickTime;
        }

        public void SetPickTime(dateTime pickTime){
            this.pickTime = pickTime; 
        }

        public string GetCareCenter(){
            return careCenter;
        }

        public void SetCareCenter(string careCenter){
            this.careCenter = careCenter; 
        }

        public string GetUser(){
            return user; 
        }

        public void SetUser(string user){
            this.user = user; 
        }

        //logic for getting/setting dependents

    }
}