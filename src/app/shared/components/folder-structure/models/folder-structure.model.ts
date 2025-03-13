export interface FolderStructureModel {
	name: string;
	bootstrapIcon?: string;
	files: {
		name: string;
		bootstrapIcon?: string;
	}[];
	children?: FolderStructureModel[];
}
