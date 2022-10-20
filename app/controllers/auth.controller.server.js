

export function DisplayLoginPage(req, res, next){
    res.render('index',{title: 'Login', page: 'login'});
}