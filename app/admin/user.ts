export class User {
	public id: number;
	public username: string;
	public name: string;
	public email: string;
	public address: string;
	public phoneno: number;
	public designation: string;
	public password: string;
	public role: number;

	constructor() {
		this.username = "";
		this.name = "";
		this.email = "";
		this.address = "";
		this.phoneno = "";
		this.designation = "";
		this.password = "";
		this.role = "";
	}
}