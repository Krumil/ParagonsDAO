import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "https://data.artblocks.io/v1/graphql",
	documents: ["app/queries.tsx"],
	generates: {
		"./src/__generated__/": {
			preset: "client",
			presetConfig: {
				gqlTagName: "gql"
			}
		}
	},
	ignoreNoDocuments: true
};

export default config;
