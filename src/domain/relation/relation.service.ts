import { Injectable } from "@nestjs/common";
import { RelationRepository } from "./relation.repository";

@Injectable()
export class RelationService {
	constructor(private relationRepository: RelationRepository) {}

	createMSong(body) {
		return this.relationRepository.createMSong(body);
	}

	createASong(body) {
		return this.relationRepository.createASong(body);
	}

	deleteMSong(body) {
		return this.relationRepository.deleteMSong(body);
	}

	deleteASong(body) {
		return this.relationRepository.deleteASong(body);
	}
}