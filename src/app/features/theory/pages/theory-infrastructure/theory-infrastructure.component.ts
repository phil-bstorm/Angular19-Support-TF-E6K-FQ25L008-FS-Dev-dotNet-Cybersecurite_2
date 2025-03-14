import {Component, signal} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {FolderStructureComponent} from "@shared/components/folder-structure/folder-structure.component";
import {FolderStructureModel} from "@shared/components/folder-structure/models/folder-structure.model";
import {
	deselectAll,
	findWithPath,
} from "@shared/components/folder-structure/utils/folder-structure.utils";
import {SrcDescriptionComponent} from "@app/features/theory/pages/theory-infrastructure/components/src-description/src-description.component";

@Component({
	selector: "theory-infrastructure",
	imports: [
		ChapterNavigationComponent,
		FolderStructureComponent,
		SrcDescriptionComponent,
	],
	templateUrl: "./theory-infrastructure.component.html",
	styleUrl: "./theory-infrastructure.component.scss",
})
export class TheoryInfrastructureComponent {
	folderStructure = signal<FolderStructureModel>({
		name: "src",
		interaction: () => this.onElementOfFolderClick("src"),
		files: [],
		children: [
			{
				name: "app",
				interaction: () => this.onElementOfFolderClick("src/app"),
				files: [],
				children: [
					{
						name: "core",
						interaction: () =>
							this.onElementOfFolderClick("src/app/core"),
						files: [],
						children: [
							{
								name: "models",
								interaction: () =>
									this.onElementOfFolderClick(
										"src/app/core/models",
									),
								files: [
									{
										name: "user.model.ts",
										interaction: () =>
											this.onElementOfFolderClick(
												"src/app/core/models/user.model.ts",
											),
									},
								],
							},
							{
								name: "constants",
								interaction: () =>
									this.onElementOfFolderClick(
										"src/app/core/constants",
									),
								files: [
									{
										name: "api.contants.ts",
										interaction: () =>
											this.onElementOfFolderClick(
												"src/app/core/constants/api.contants.ts",
											),
									},
								],
							},
							{
								name: "interceptors",
								files: [
									{
										name: "jwt.interceptor.ts",
									},
								],
							},
							{
								name: "services",
								files: [
									{
										name: "user.service.ts",
									},
								],
								children: [
									{
										name: "auth",
										files: [
											{
												name: "auth.service.ts",
											},
										],
										children: [
											{
												name: "models",
												files: [
													{
														name: "login-credential.model.ts",
													},
													{
														name: "login-response.model.ts",
													},
													{
														name: "register.model.ts",
													},
												],
											},
										],
									},
								],
							},
						],
					},
					{
						name: "features",
						files: [],
						children: [
							{
								name: "auth",
								files: [
									{
										name: "auth.routes.ts",
									},
								],
								children: [
									{
										name: "pages",
										files: [],
										children: [
											{
												name: "auth-login",
												files: [
													{
														name: "auth-login.component.ts",
													},
													{
														name: "auth-login.component.html",
														bootstrapIcon:
															"bi-filetype-html",
													},
													{
														name: "auth-login.component.scss",
														bootstrapIcon:
															"bi-filetype-scss",
													},
												],
											},
											{
												name: "auth-register",
												files: [
													{
														name: "auth-register.component.ts",
													},
													{
														name: "auth-register.component.html",
														bootstrapIcon:
															"bi-filetype-html",
													},
													{
														name: "auth-register.component.scss",
														bootstrapIcon:
															"bi-filetype-scss",
													},
												],
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	});

	interactingWith = signal<string>("");

	onElementOfFolderClick(elementPath: string) {
		console.log(`TheoryInfrastructureComponent -> ${elementPath}`);
		this.interactingWith.set(elementPath);
		let fs = this.folderStructure();
		fs = deselectAll(fs);

		console.log(fs);

		const ff = findWithPath(fs, elementPath);
		ff.isSelected = true;

		console.log(fs);
		this.folderStructure.set({...fs});
	}
}
