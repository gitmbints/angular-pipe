import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/Student";

@Pipe({
	name: "filter",
})
export class FilterPipe implements PipeTransform {
	transform(list: Student[], filterBy: string): Student[] {
		let filteredList: Student[] = [];

		switch (filterBy) {
			case "Male":
				filteredList = list.filter((item) => item.gender === "Male");
				break;
			case "Female":
				filteredList = list.filter((item) => item.gender === "Female");
				break;
			default:
				filteredList = list;
		}

		return filteredList;
	}
}
