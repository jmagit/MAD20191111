using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Nuevo.Startup))]
namespace Nuevo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
