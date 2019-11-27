using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Nuevo {
    public class RouteConfig {
        public static void RegisterRoutes(RouteCollection routes) {
            routes.MapMvcAttributeRoutes();

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Demo",
                url: "{esta}/me/la/invento/{modo}",
                defaults: new { 
                    controller = "Home", 
                    action = "Demo", 
                    modo = "corto" }
            );
            routes.MapRoute(
                name: "Demo2",
                url: "otra/demo",
                defaults: new {
                    controller = "Home",
                    action = "Demo",
                    modo = "corto"
                }
            );
            //routes.MapRoute(
            //    name: "Default2",
            //    url: "{controller}/{id}/{action}",
            //    defaults: new { 
            //        action = "Index" }
            //);


            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

        }
    }
}
