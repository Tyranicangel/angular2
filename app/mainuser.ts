export class MainUser {
	public id: number;
	public name: string;
	public designation: string;
	public link: string;

	constructor(user) {
		this.id = user.id;
		this.name = user.name;
		this.designation = user.designation;
		this.link = user.link;
	}
}