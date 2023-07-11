using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back-end.models
{
    public class CareCenter
    {
        private String adress; //variable for each line of address (street, city, state, etc.)?
        private integer phoneNumber; 
        private String email; 
        private boolean isCorp; 
        private String type; 


        public string GetAddress(){
            return address; 
        }

        public void SetAddress(string address){
            this.address = address;
        }

        public int GetPhoneNumber(){
            return phoneNumber; 
        }

        public void SetPhoneNumber(int phoneNumber){
            this.phoneNumber = phoneNumber; 
        }

        public string GetEmail(){
            return email;
        }

        public void SetEmail(string email){
            this.email = email; 
        }

        public bool GetIsCorp(){
            return isCorp; 
        }

        public void SetIsCorp(bool isCorp){
            this.isCorp = isCorp; 
        }

        public string GetType(){
            return type; 
        }

        public void SetType(string type){
            this.type = type; 
        }

    }

}