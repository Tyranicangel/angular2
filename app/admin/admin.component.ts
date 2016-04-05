import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Default} from '../default';
import {MainUser} from '../mainuser';
import {HomeComponent} from './home.component';
import {CreateUserComponent} from './createuser.component';


@Component({
	selector: 'user',
	templateUrl: 'app/templates/admin/admin.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([{
	path: '/home',
	name: 'Home',
	component: HomeComponent,
	useAsDefault: true
},
{
	path: '/createuser',
	name: 'CreateUser',
	component: CreateUserComponent
}
])

export class AdminComponent implements OnInit {
	mainuser: MainUser;
	constructor(private http: Http, private _router: Router) { }
	ngOnInit() {
		var def: Default;
		def = new Default;
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('JWT-AuthToken', localStorage.getItem('bugtoken'));
		let options = new RequestOptions({ headers: headers });
		this.http.get(def.requestUrl() + 'user_details', options)
			.map(res => res.json())
			.subscribe(
			data => this.mainuser = new MainUser(data),
			err => console.log(err),
		);
	}


	logout() {
		localStorage.removeItem('bugtoken');
		this._router.navigate(["Login"]);
	}
}