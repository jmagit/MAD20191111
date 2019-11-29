using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Nuevo.Controllers
{
    [RoutePrefix("minis/general/publicaciones")]
    [Route("{action=index}")]
    public class MinisterioController : Controller
    {
        //[Route]
        // GET: Ministerio
        public ActionResult Index()
        {
            return View();
        }
        //[Route("contact")]
        [Authorize]
        public ActionResult Contacto()
        {
            return View();
        }
    }
}