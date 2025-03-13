import {Component, signal} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {FolderStructureComponent} from "@shared/components/folder-structure/folder-structure.component";
import {FolderStructureModel} from "@shared/components/folder-structure/models/folder-structure.model";

@Component({
	selector: "theory-infrastructure",
	imports: [ChapterNavigationComponent, FolderStructureComponent],
	templateUrl: "./theory-infrastructure.component.html",
	styleUrl: "./theory-infrastructure.component.scss",
})
export class TheoryInfrastructureComponent {
	folderStructure: FolderStructureModel = {
		name: "src",
		files: [],
		children: [
			{
				name: "app",
				files: [],
				children: [
					{
						name: "core",
						files: [],
						children: [
							{
								name: "models",
								files: [{name: "user.model.ts"}],
							},
							{
								name: "constants",
								files: [
									{
										name: "api.contants.ts",
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
	};

	interactingWith = signal<string>("");

	onElementOfFolderClick(element: string) {
		console.log(`TheoryInfrastructureComponent -> ${element}`);
		this.interactingWith.set(element);
	}
}
