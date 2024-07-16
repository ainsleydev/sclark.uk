import * as fs from "node:fs";
import path from "node:path";
// import { configToJSONSchema, getPayload } from "payload";
import { getPayload } from "payload";
import { importConfig } from "payload/node";
import { fileURLToPath } from "node:url";
import { configToJSONSchema } from "@ainsleydev/payload-helper/src/gen/schema";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Creates JSON schema types of Payloads Collections & Globals
 *
 */
export async function generateTypes(): Promise<void> {
	console.log("Compiling JSON types for Collections and Globals...");

	const config = await importConfig("./payload.config.ts");

	const payload = await getPayload({
		config,
		disableDBConnect: true,
		disableOnInit: true,
		// @ts-ignore
		local: true,
		secret: "--unused--",
	});

	const jsonSchema = configToJSONSchema(payload.config, payload.db.defaultIDType);
	const prettyJSON = JSON.stringify(jsonSchema, null, 4);
	const outFile = path.resolve(dirname, "types/payload.json");

	fs.writeFileSync(outFile, prettyJSON);

	console.log(`JSON types written to: ${outFile}`);
}

generateTypes().catch((e) => console.log(e));
