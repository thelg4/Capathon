using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back-end.models
{
    public class User
    {
        private integer id; 
        private String username; 
        private String password; 
        private String firstName; 
        private String lastName;
        private String careCenter; 
        private integer phoneNumber; 
        private String email; 
        private String[] dependents; 
        private String addess; //variable for each line of address (street, city, state, etc.)?

        public int GetId(){
            return id;
        }

        public void SetId(int id){
            this.id = id;
        }

        public string GetUsername(){
            return username; 
        }

        public void SetUsername(string username){
            this.username = username; 
        }

        public string GetPassword(){
            return password; 
        }

        public void SetPassword(string password){
            this.password = password; 
        }

        public string GetFirstName(){
            return firstName;
        }

        public void SetFirstName(string firstName){
            this.firstName = firstName; 
        }

        public string GetLastName(){
            return lastName; 
        }

        public void SetLastName(string lastName){
            this.lastName = lastName; 
        }

        public string GetCareCenter(){
            return careCenter; 
        }

        public void SetCareCenter(string careCenter){
            this.careCenter = careCenter; 
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

        //need logic for getting/setting dependents, if stays array

        public string GetAddress(){ 
            return address; 
        }

        public string SetAddress(string address){
            this.address = address; 
        }
    }
}