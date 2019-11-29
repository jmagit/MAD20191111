using Nuevo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Nuevo.Controllers {
    public class CatalogoController : Controller {
        // GET: Catalogo
        public ActionResult Index() {
            ViewBag.categorias = (new CategoriesController()).GetProductCategories().ToList();
            return View();
        }
        public PartialViewResult Subcategorias(int id) {
            AWEntities db = new AWEntities();
            return PartialView("_Subcategorias",
                db.ProductCategories.Find(id).ProductCategory1);

        }
    }
}