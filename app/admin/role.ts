export class Role {
	public id: number;
	public role: string;
	public link: string;

	constructor(role) {
		this.id = role.id;
		this.role = role.role;
		this.link = role.link;
	}
}