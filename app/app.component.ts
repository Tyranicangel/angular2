import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';


@Component({
	selector: 'app',
	template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

@RouteConfig([{
	path: '/login',
	name: 'Login',
	component: LoginComponent,
	useAsDefault: true
}, 
{
	path: '/admin/...',
	name: 'Admin',
	component: AdminComponent
}, {
	path: '/**',
	redirectTo: ['Login']
}
])

export class AppComponent {

}