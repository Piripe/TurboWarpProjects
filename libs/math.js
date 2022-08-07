class AdvMath {
    getInfo() {
        return {
            id: "piripe0math",
            name: "Advanced Math",

            blocks: [
                {
                    opcode: "hello",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Hello, world!",
                },
            ],
        };
    }

    hello() {
        return "Hello, world!";
    }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new AdvMath());
