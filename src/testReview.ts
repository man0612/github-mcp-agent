import { AIService } from "./services/ai.service";

const ai = new AIService();

async function main() {

    const patch = `
@@
-function login(){}
+function login(username,password){
+ console.log("Logging in");
+}
`;

    const review = await ai.reviewCode(patch);

    console.log(review);
}

main();