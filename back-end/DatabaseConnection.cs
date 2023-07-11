using System;
using System.Data;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back-end //can refactor to a different folder
{
    public class DatabaseConnection //can add logic in this class to run our queries
    {
        private string connectionString; 
        private SqlConnection connection;

        public DatabaseConnection(string connectionString){
            this.connectionString = connectionString; 
        }

        public void Connect(){ //opens connection
            connection = new SqlConnection(connectionString);
            connection.Open(); 
        }

        public void Disconnect(){ //closes connection
            if(connection != null && connection.String == ConnectionState.Open){

                connection.Close();
                connection.Dispose();

            }
        }
    }
}