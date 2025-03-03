export class HomeController {
    public getHome(req: any, res: any): void {
        res.render('home');
    }
}