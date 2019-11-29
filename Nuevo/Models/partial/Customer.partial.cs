using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Nuevo.Models {
    class CustomerMetadata {
        public int CustomerID { get; set; }
        public bool NameStyle { get; set; }
        public string Title { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        [Display(Name = "Nombre")]
        public string FirstName { get; set; }
        [StringLength(maximumLength: 50)]
        public string MiddleName { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        [Display(Name = "Apellidos")]
        public string LastName { get; set; }
        public string Suffix { get; set; }
        [DataType(DataType.MultilineText)]
        public string CompanyName { get; set; }
        public string SalesPerson { get; set; }
        [DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }
        public string Phone { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public System.Guid rowguid { get; set; }
        public System.DateTime ModifiedDate { get; set; }
        public virtual ICollection<CustomerAddress> CustomerAddresses { get; set; }
        [JsonIgnore]
        public virtual ICollection<SalesOrderHeader> SalesOrderHeaders { get; set; }
    }

    [MetadataType(typeof(CustomerMetadata))]
    public partial class Customer: IValidatableObject {
        public string NombreCompleto {
            get {
                return LastName + ", " + FirstName;
            }
        }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext) {
            var validationResults = new List<ValidationResult>();
            var context = new ValidationContext(this, null, null);
            //Validator.TryValidateObject(this,
            //          context,
            //          validationResults,
            //          false);
            
            if (FirstName != null && FirstName.ToUpper() != FirstName ) {
                validationResults.Add(
                    new ValidationResult("Tiene que estar en mayúsculas", 
                    new string[] { "FirstName" } ));
            }

            return validationResults;
        }
    }
}