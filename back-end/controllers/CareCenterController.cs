using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace back-end.controllers
{
   
    public class CareCenterController : Controller //placeholder controller to populate folder for GitHub
    {
        //GET: /CareCenter/

        public string Index(){
            return "DEFAULT PAGE"
        }

        // GET: /CareCenter/Test/

        public string Test(){
            return "TEST ACTION"
        }
       
    }
}