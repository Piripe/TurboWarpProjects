class TWGL {
    getInfo() {
        return {
            id: "piripe0twgl",
            name: "TWGL (TurboWarp Graphics Library)",

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
Scratch.extensions.register(new TWGL());
