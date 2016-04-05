import {Component, OnInit} from 'angular2/core';

@Component({
	selector: 'content',
	templateUrl: 'app/templates/admin/home.html',
})

export class HomeComponent implements OnInit {
	constructor() { }
	ngOnInit() {
		console.log(123);
	}
}