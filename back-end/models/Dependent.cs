using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back-end.models
{
    public class Dependent
    {
        private integer id; 
        private String firstName; 
        private String lastName;
        private integer age;
        private String gender;  
        private String[] accomodations; 
        private String[] medicalInfo;


        public int GetId(){
            return id; 
        }

        public void SetId(int id){
            this.id = id; 
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

        public int GetAge(){
            return age; 
        }

        public void SetAge(int age){
            this.age = age; 
        }

        public string GetGender(){
            return gender; 
        }

        public void SetGender(string gender){
            this.gender = gender;
        }

        //Need Getters/Setters for accomodations
        //Need Getters/Setters for medicalInfo


    }
}