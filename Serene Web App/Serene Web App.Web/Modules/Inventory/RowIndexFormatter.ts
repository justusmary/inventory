
namespace Serene_Web_App.Inventory
{
    @Serenity.Decorators.registerFormatter()
    export class RowIndexFormatter implements Slick.Formatter
    {
        format(ctx: Slick.FormatterContext) {
            return (ctx.row + 1).toString();
        }
    }
}
