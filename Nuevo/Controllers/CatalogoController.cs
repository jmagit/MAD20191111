using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Nuevo.Controllers {
    public class CatalogoController : Controller {
        // GET: Catalogo
        public ActionResult Index() {
            return View((new CategoriesController()).GetProductCategories());
        }
        public PartialViewResult Subcategorias(int id) {
            return PartialView("_Subcategorias",
                (new CategoriesController()).GetProductCategory(id));

        }
    }
}