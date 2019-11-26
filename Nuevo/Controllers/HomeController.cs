using Nuevo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Nuevo.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            return View();
        }

        public ActionResult About() {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact() {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Demo(string modo = "largo") {
            AWEntities db = new AWEntities();
            var list = db.Customers.Where(p => p.FirstName.StartsWith("S") && p.Title == "Ms.")
                    .OrderBy(p => p.LastName)
                    .Skip(5)
                    .Take(5)
                    .ToList();
            if (modo.ToLower() == "corto") {
                return View("DemoCorto", list);
            } else if (modo.ToLower() == "json") {
                return Json(list);
            } else
                return View(list);
            }
        }
    }