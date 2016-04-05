import {Component, OnInit} from 'angular2/core';
import {LoginUser} from './loginuser';
import {Default} from '../default';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Rx';


@Component({
	selector: 'login',
	templateUrl: 'app/templates/login.html',
})

export class LoginComponent implements OnInit {
	loginuser: LoginUser;
	constructor(private http: Http, private _router: Router) { }
	ngOnInit() {
		this.loginuser = new LoginUser;
	}

	login() {
		var def: Default;
		def = new Default;
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		this.http.post(def.requestUrl() + 'login', JSON.stringify(this.loginuser), options)
			.map(res => res.json())
			.subscribe(
			data => {
				if (data['statusCode'] == "202") {
					localStorage.setItem('bugtoken', data['message']);
					this._router.navigate([data['link']]);
				}
			},
			err => console.log(err),
			);
	}
}