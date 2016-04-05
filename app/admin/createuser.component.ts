import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Default} from '../default';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from 'angular2/http';
import {User} from './user';
import {Role} from './role';

@Component({
	selector: 'content',
	templateUrl: 'app/templates/admin/createuser.html',
})

export class CreateUserComponent implements OnInit {
	user: User;
	rolelist: Role[];
	constructor(private http: Http) { }
	ngOnInit() {
		this.user = new User;
		var def: Default;
		def = new Default;
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('JWT-AuthToken', localStorage.getItem('bugtoken'));
		let options = new RequestOptions({ headers: headers });
		this.http.get(def.requestUrl() + 'role_list', options)
			.map(res => res.json())
			.subscribe(
			data => this.rolelist=data,
			err => console.log(err),
		);
	}

	createuser(){
		console.log(this.user);
	}
}
