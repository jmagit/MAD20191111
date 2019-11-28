using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Nuevo.Models {
    public partial class Customer {
        public string NombreCompleto {
            get {
                return LastName + ", " + FirstName;
            }
        }
    }
}