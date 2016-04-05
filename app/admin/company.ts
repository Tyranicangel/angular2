export class Company {
	public id: number;
	public name: string;
	public address: string;

	constructor(role) {
		this.id = role.id;
		this.name = role.role;
		this.addess = role.link;
	}
}