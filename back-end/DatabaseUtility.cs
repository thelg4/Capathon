using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.DatabaseConnection; 

namespace back-end
{
    public class DatabaseUtility //example class for database connection
    {
        string connectionString = "connection string" //replace with connection to db server

        DatabaseConnector connector = new DatabaseConnector
        connector.Connect(); 

        // run some sort of queries here for whatever we need in given class
    }
}